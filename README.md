# Vue.js Shopping Cart Application

Welcome to the Vue.js Shopping Cart Application! This project is a modern web app built using Vue.js for managing a shopping cart, wishlist, and product comparisons.

## Features

- **Product Listing:** View and interact with products.
- **Shopping Cart:** Add, remove, and manage items in the cart.
- **Wishlist:** Save favorite products for future reference.
- **Comparison:** Compare different products.
- **User Authentication:** Redirects to login for protected routes.
- **Checkout:** Proceed to checkout with the cart items.

## Deployed Application

The project has been deployed to Vercel. You can access the live application at the following link:

[https://swiftcartdeploymenttest.vercel.app/](https://swiftcartdeploymenttest.vercel.app/)

## File Structure

The project consists of several key files and components:

### `App.vue`

- **Description:** Main application component that includes a router view for navigation.
- **Key Features:** 
  - `<router-view />`: Placeholder for routed components.

### `router/index.js`

- **Description:** Vue Router configuration file for setting up routes.
- **Key Features:** 
  - **Routes Configuration:**
    - `/`: Home page
    - `/product/:id`: Product detail page
    - `/login`: Login page
    - `/cart`: Shopping cart page (protected)
    - `/wishlist`: Wishlist page (protected)
    - `/comparison`: Comparison page (protected)
    - `/checkout`: Checkout page

- **Utilities:**
  - `isAuthenticated()`: Checks if the user is authenticated.
  - `logout()`: Logs out the user by removing the auth token.

### `components/Wishlist.vue`

- **Description:** Component for managing the wishlist.
- **Key Features:** 
  - **Filters and Sorting:** Filter items by category and sort by price or title.
  - **Wishlist Management:** Add to cart, update quantity, and remove items.

### `store/index.js`

- **Description:** Reactive stores for managing cart, wishlist, and comparison states.
- **Stores:**
  - **`cartStore`:** 
    - `products`: Array of products in the cart.
    - `addToCart(product)`: Adds or updates product in the cart.
    - `removeFromCart(productId)`: Removes product from the cart.
    - `clearCart()`: Clears all products from the cart.
  
  - **`wishlistStore`:** 
    - `wishlist`: Array of products in the wishlist.
    - `addToWishlist(product)`: Adds product to the wishlist if not already present.
    - `removeFromWishlist(productId)`: Removes product from the wishlist.
    - `clearWishlist()`: Clears all products from the wishlist.
  
  - **`comparisonStore`:** 
    - `comparison`: Array of products for comparison.
    - `addToComparison(product)`: Adds product to the comparison list if not already present.
    - `removeFromComparison(productId)`: Removes product from the comparison list.
    - `clearComparison()`: Clears all products from the comparison list.

## Development

To run the project locally:

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
2. **Navigate to the Project Directory:**
   cd <project-directory>
3. **Install Dependencies:**
  npm install
4. **Run the Development Server:**
   npm run serve
5. **Open Your Browser:**
Visit http://localhost:8080 to view the application.

## Deployment
The project is deployed on Vercel. You can view the live application at https://swiftcartdeploymenttest.vercel.app/.

## Contributing
If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes.
4. Push your branch to your forked repository.
5. Open a pull request with a description of your changes.
## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Vue.js for the powerful framework.
- Vercel for the deployment platform.