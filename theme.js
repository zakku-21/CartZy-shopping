(() => {
  const STORAGE_KEY = "cz-theme";
  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelectorAll(".cz-theme-toggle").forEach(btn => {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      const icon = btn.querySelector('[data-role="icon"]');
      if (icon) icon.textContent = theme === "dark" ? "🌙" : "☀️";
    });
  }
  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }
  applyTheme(getPreferredTheme());
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".cz-theme-toggle");
    if (btn) toggleTheme();
  });
})();
