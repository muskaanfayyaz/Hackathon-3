# **Comforty - E-Commerce Marketplace**

Welcome to **Comforty**, a modern e-commerce platform built with **Next.js**, **React**, and **Sanity**. This project features a dynamic marketplace for products, including features like a shopping cart, wishlist, product categories, and much more. Whether you're browsing through our catalog, adding items to your wishlist, or managing your shopping cart, **Comforty** is designed to provide an intuitive and seamless shopping experience.

## **Features**

- **Product Categories & Listings**: Browse through a variety of categories and products, each with detailed descriptions, pricing, and images.
- **Dynamic Product Details**: Click on any product for detailed information, including pricing, discounts, and inventory status.
- **Wishlist Functionality**: Save your favorite products and easily access them later. Your wishlist is saved in localStorage to persist across sessions.
- **Shopping Cart**: Add products to your cart and proceed to checkout with ease.
- **Responsive Design**: The website is fully responsive, ensuring a smooth experience on desktops, tablets, and mobile devices.
- **Product Filtering & Search**: Quickly find the products you're looking for by applying filters or searching by name, category, or tags.

## **Tech Stack**

- **Frontend**: React, Next.js, Headless CSS
- **CMS**: Sanity for structured content management
- **State Management**: React Context for managing global states (e.g., Wishlist)
- **API Integration**: Axios for fetching data from MockAPI and Sanity
- **Persistence**: LocalStorage for saving the wishlist across sessions

## **Setup & Installation**

To get started with the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/comforty.git
   cd comforty
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Your project will be live at `http://localhost:3000`.

## **Sanity CMS Setup**

To configure Sanity CMS, follow these steps:

1. Install the Sanity CLI:
   ```bash
   npm install -g @sanity/cli
   ```

2. Set up your Sanity project:
   ```bash
   sanity init
   ```

3. Configure the schemas for `categories` and `products` as defined in the project.

## **Wishlist Feature**

The **Wishlist** feature is powered by React Context and LocalStorage to allow users to:

- **Add items** to the wishlist without duplicates.
- **Remove items** easily from the wishlist.
- **Persist** the wishlist even after page reloads using LocalStorage.

## **Key Components**

- **Product Listing**: Displays all products in a grid layout, with filtering options.
- **Product Detail**: Shows detailed information about each product, including pricing, description, and availability.
- **Category Filter**: Users can filter products by category to narrow down their search.
- **Search Bar**: Allows users to search products by keywords or tags.
- **Cart & Checkout**: Manage products in the cart and proceed to checkout.
- **FAQ & Help Center**: A section to assist users with common queries and issues.
- **Related Products**: Suggests similar items based on the user's browsing history.
- **Social Media Sharing**: Easy sharing of products on social media platforms.

## **Screenshots**

Here's a sneak peek at some of the key features:

- **Homepage**
  ![Homepage](![homepage](image.png))

- **Product Detail Page**
  ![Product Detail](![products](image-1.png))

- **Wishlist Page**
  ![Wishlist](![wishlist](image-2.png))

## **Challenges & Solutions**

- **Challenge**: Managing the wishlist and ensuring it persists across sessions.
  **Solution**: Implemented React Context and used LocalStorage to save and retrieve wishlist data.
  
- **Challenge**: Integrating product data from MockAPI and Sanity seamlessly.
  **Solution**: Used Axios for fetching product data and dynamically rendering it based on the current category or search query.

## **Conclusion**

Comforty is a powerful and flexible e-commerce platform that showcases modern web development techniques. From product listing to dynamic details, responsive layouts to local storage for wishlist persistence, this project is designed with scalability and user experience in mind.

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

