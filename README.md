# How to Implement the Products Dropdown

This guide explains how to add the shared "Products" navigation dropdown to any HTML page in this project. Following these steps will ensure consistent functionality and styling across the site.

## Step 1: Add the Dropdown HTML

In your target HTML file (e.g., `about.html`), locate the main navigation bar, which is the `<nav>` element. Find the `<div>` that contains the navigation links (`<div class="hidden md:flex space-x-6">`).

Replace the existing static "Products" link:

```html
<!-- REMOVE THIS LINE -->
<a href="index.html#products" class="flex items-center hover:text-purple-400 transition duration-300">...</a>
```

With the following HTML structure for the dropdown. Place it between the "Home" and "About Us" links.

```html
<div class="relative">
    <button id="products-button" class="flex items-center hover:text-purple-400 transition duration-300 focus:outline-none">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="#a78bfa" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        Products
        <svg class="w-4 h-4 ml-1" fill="none" stroke="#a78bfa" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </button>
    <div id="products-dropdown" class="absolute left-0 mt-4 w-72 bg-white rounded-md shadow-lg z-20 hidden ring-1 ring-black ring-opacity-5">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        </div>
    </div>
</div>
```

**Note:** Ensure the other navigation links (`Home`, `About Us`, `Contact`) point to the main `index.html` sections (e.g., `href="index.html#about"`) as these pages are subsidiary.

## Step 2: Include Necessary CSS and JavaScript Files

The dropdown's functionality and styling depend on shared files. Ensure your HTML file includes the following:

1.  **In the `<head>` section**, make sure the main stylesheet is linked:
    ```html
    <link rel="stylesheet" href="css/style.css">
    ```

2.  **At the very end of the `<body>` section**, add the script tags for the product data and the main JavaScript logic. It is crucial that `data.js` comes before `main.js`.
    ```html
    <!-- Add these lines right before the closing </body> tag -->
    <script src="js/data.js"></script>
    <script src="js/main.js"></script>
    ```

## Step 3: Resolve JavaScript Conflicts (Very Important)

Some pages may have their own inline `<script>` tag that defines a list of products for displaying on that page (e.g., `janitorial.html`). This can create a conflict with the `products` variable from `data.js` that the dropdown menu relies on.

**This conflict will break the dropdown and may stop the rest of the page from rendering.**

To fix this, you must rename the `products` variable inside the page-specific inline script.

**Example from `janitorial.html`:**

1.  Find the inline script at the bottom of the page.
2.  Locate the line that declares the products list.

    **Before:**
    ```javascript
    <script>
        const products = [
            // ... array of janitorial products
        ];
        
        // ... code that uses 'products' ...
        renderProducts(products);
    </script>
    ```

3.  Rename `const products` to a unique name, like `const janitorialProducts`, and update all places where it is used within that same script.

    **After:**
    ```javascript
    <script>
        const janitorialProducts = [ // <--- RENAMED HERE
            // ... array of janitorial products
        ];

        // ...
        
        function renderProducts(productsToRender) {
            // ...
        }

        function populateCategories() {
            janitorialProducts.forEach(product => { // <--- UPDATED HERE
                //...
            });
        }
        
        function filterProducts() {
            // ...
            filteredProducts = janitorialProducts; // <--- UPDATED HERE
            // ...
        }

        document.addEventListener('DOMContentLoaded', () => {
            // ...
            renderProducts(janitorialProducts); // <--- UPDATED HERE
            // ...
        });
    </script>
    ```

By following these three steps, the dropdown menu will be implemented correctly and will function consistently across all pages.
