# CartZy

CartZy is a responsive, single-page shopping storefront built with HTML, CSS, and vanilla JavaScript. It includes a sample product catalog, shopping cart, wishlist, search, account demo, theme switcher, and checkout flow.

## Run locally

No package installation or build step is required. Open `index.html` in a browser, or run a local server from this folder:

```powershell
php -S localhost:8000
```

Then visit <http://localhost:8000>.

You can also open this folder in VS Code and use the Live Server extension.

## Features

- Browse products in 10 categories, with trending selections and category filters.
- Search products and browse paginated product cards.
- Add items to the cart and adjust quantities.
- Add and remove wishlist items.
- Try the sample sign-up and login experience.
- Switch between dark and light themes; the initial theme follows the browser preference.
- Explore a demo checkout with UPI, debit card, and cash-on-delivery options.

Cart, account demo, and wishlist data use browser `localStorage`, so they persist in that browser until its site data is cleared. The catalog and checkout are client-side demonstrations: there is no backend, stock management, real authentication, payment processing, or order storage. **Do not enter real passwords, card details, or payment information.**

## Product images

Product data is defined in `app.js`. Product images are loaded from `images/<category>/<product-name>.jpg`. The category and filename are derived from each product's `cat` and `name` values: the category is the category ID, and the name is converted to lowercase hyphen-separated text.

For example, the “Wireless Bluetooth Earbuds Pro” product uses:

```text
images/electronics/wireless-bluetooth-earbuds-pro.jpg
```

Create the category folders and add matching `.jpg` files to show product photos. If an image is missing, the product card falls back to its emoji.

## Project files

```text
CartZy/
├── index.html   # Storefront markup and cart/checkout dialogs
├── styles.css   # Layout, responsive styles, and light/dark themes
├── app.js       # Catalog, search, cart, wishlist, and demo account/checkout
├── theme.js     # Theme preference and theme toggle
└── images/      # Optional product photos organized by category
```

## Customization

- Edit `PRODUCTS` and `CATEGORIES` near the top of `app.js` to change the sample catalog.
- Add image files under `images/` using the naming convention above.
- Update `styles.css` to adjust colors, layout, and responsive breakpoints.
- Update the page title and description in `index.html` when adapting the storefront.
