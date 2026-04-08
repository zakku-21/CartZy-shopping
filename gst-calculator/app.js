const gstForm = document.getElementById("gstForm");
const amountInput = document.getElementById("amount");
const rateSelect = document.getElementById("gstRate");
const resetBtn = document.getElementById("resetBtn");
const quickRateButtons = document.querySelectorAll(".chip");
const padButtons = document.querySelectorAll(".pad-btn");

const finalAmountOutput = document.getElementById("finalAmount");
const baseAmountOutput = document.getElementById("baseAmount");
const gstAmountOutput = document.getElementById("gstAmount");
const splitTaxOutput = document.getElementById("splitTax");
const selectedRateOutput = document.getElementById("selectedRate");
const resultNote = document.getElementById("resultNote");

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

function formatCurrency(value) {
  return currencyFormatter.format(Number.isFinite(value) ? value : 0);
}

function updateResults({ finalAmount, baseAmount, gstAmount, rate, mode }) {
  const halfTax = gstAmount / 2;

  finalAmountOutput.textContent = formatCurrency(finalAmount);
  baseAmountOutput.textContent = formatCurrency(baseAmount);
  gstAmountOutput.textContent = formatCurrency(gstAmount);
  splitTaxOutput.textContent = `${formatCurrency(halfTax)} / ${formatCurrency(halfTax)}`;
  selectedRateOutput.textContent = `${rate}%`;
  resultNote.textContent =
    mode === "exclusive"
      ? "GST has been added to the base amount. CGST and SGST are split equally."
      : "GST has been extracted from the entered amount. CGST and SGST are split equally.";
}

function syncQuickRateState() {
  const currentRate = rateSelect.value.trim();

  quickRateButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.rate === currentRate);
  });
}

function resetResults() {
  finalAmountOutput.textContent = "₹0.00";
  baseAmountOutput.textContent = "₹0.00";
  gstAmountOutput.textContent = "₹0.00";
  splitTaxOutput.textContent = "₹0.00 / ₹0.00";
  selectedRateOutput.textContent = `${rateSelect.value}%`;
  resultNote.textContent = "Enter an amount and calculate to see the GST breakup.";
  syncQuickRateState();
}

function sanitizeExpression(value) {
  return value
    .replace(/[×x]/gi, "*")
    .replace(/[÷]/g, "/")
    .replace(/[−]/g, "-")
    .replace(/\s+/g, "")
    .replace(/[^0-9+\-*/%.()]/g, "");
}

function evaluateExpression(expression) {
  const normalizedExpression = sanitizeExpression(expression);

  if (!normalizedExpression) {
    return NaN;
  }

  if (!/^[0-9+\-*/%.()]+$/.test(normalizedExpression)) {
    return NaN;
  }

  try {
    const calculatedValue = Function(`"use strict"; return (${normalizedExpression});`)();

    return Number(calculatedValue);
  } catch (error) {
    return NaN;
  }
}

function insertAtCursor(value) {
  const start = amountInput.selectionStart ?? amountInput.value.length;
  const end = amountInput.selectionEnd ?? amountInput.value.length;
  const currentValue = amountInput.value;

  amountInput.value = `${currentValue.slice(0, start)}${value}${currentValue.slice(end)}`;
  const nextPosition = start + value.length;
  amountInput.focus();
  amountInput.setSelectionRange(nextPosition, nextPosition);
}

function handleBackspace() {
  const start = amountInput.selectionStart ?? amountInput.value.length;
  const end = amountInput.selectionEnd ?? amountInput.value.length;

  if (start !== end) {
    amountInput.value = `${amountInput.value.slice(0, start)}${amountInput.value.slice(end)}`;
    amountInput.setSelectionRange(start, start);
    return;
  }

  if (start === 0) {
    return;
  }

  amountInput.value = `${amountInput.value.slice(0, start - 1)}${amountInput.value.slice(end)}`;
  amountInput.setSelectionRange(start - 1, start - 1);
}

function handleEvaluate() {
  const evaluatedValue = evaluateExpression(amountInput.value);

  if (!Number.isFinite(evaluatedValue)) {
    resultNote.textContent = "Enter a valid amount or calculator expression.";
    return;
  }

  amountInput.value = evaluatedValue.toFixed(2).replace(/\.00$/, "");
  amountInput.focus();
}

gstForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const amount = evaluateExpression(amountInput.value);
  const rate = Number(rateSelect.value);
  const mode = document.querySelector('input[name="calculationType"]:checked').value;

  if (!Number.isFinite(amount) || amount < 0) {
    resultNote.textContent = "Please enter a valid positive amount.";
    return;
  }

  if (!Number.isFinite(rate) || rate < 0) {
    resultNote.textContent = "Please enter a valid GST percentage.";
    return;
  }

  amountInput.value = amount.toFixed(2).replace(/\.00$/, "");

  let baseAmount = amount;
  let gstAmount = 0;
  let finalAmount = amount;

  if (mode === "exclusive") {
    gstAmount = (amount * rate) / 100;
    finalAmount = amount + gstAmount;
  } else {
    baseAmount = amount / (1 + rate / 100);
    gstAmount = amount - baseAmount;
    finalAmount = amount;
  }

  updateResults({
    finalAmount,
    baseAmount,
    gstAmount,
    rate,
    mode
  });
});

resetBtn.addEventListener("click", () => {
  gstForm.reset();
  rateSelect.value = "18";
  document.querySelector('input[name="calculationType"][value="exclusive"]').checked = true;
  amountInput.value = "";
  amountInput.focus();
  resetResults();
});

quickRateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    rateSelect.value = button.dataset.rate;
    selectedRateOutput.textContent = `${rateSelect.value}%`;
    syncQuickRateState();
  });
});

padButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { action, value } = button.dataset;

    if (action === "clear") {
      amountInput.value = "";
      amountInput.focus();
      resultNote.textContent = "Amount cleared. Enter a new value or expression.";
      return;
    }

    if (action === "backspace") {
      handleBackspace();
      amountInput.focus();
      return;
    }

    if (action === "evaluate") {
      handleEvaluate();
      return;
    }

    if (value) {
      insertAtCursor(value);
    }
  });
});

amountInput.addEventListener("input", () => {
  const cursorStart = amountInput.selectionStart ?? amountInput.value.length;
  const sanitizedValue = sanitizeExpression(amountInput.value);

  if (amountInput.value !== sanitizedValue) {
    amountInput.value = sanitizedValue;
    const nextPosition = Math.min(cursorStart, sanitizedValue.length);
    amountInput.setSelectionRange(nextPosition, nextPosition);
  }
});

rateSelect.addEventListener("input", () => {
  selectedRateOutput.textContent = `${rateSelect.value || 0}%`;
  syncQuickRateState();
});

resetResults();
