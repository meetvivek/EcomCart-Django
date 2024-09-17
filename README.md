# EcomCart - A Simple E-commerce Project

## Overview

EcomCart is a simple e-commerce application built with Django. The project aims to provide a basic yet functional online shopping experience while learning Django. Key features include product listing, cart management, and checkout functionality. The application utilizes browser localStorage to maintain the cart state and saves orders as instances of the Order model when users complete their purchases.
## Features

- **Product Listing**: View products with their titles, images, original and discounted prices.
- **Add to Cart**: Add products to the cart and view cart contents.
- **Buy Now**: Quickly add a product to the cart and redirect to the checkout page.
- **Remove from Cart**: Remove specific items from the cart within the popover.
- **Search**: Search for products by name.
- **Pagination**: Navigate through multiple pages of products.
- **Persistent Cart**: Utilizes browser localStorage to store cart items across page reloads.
- **Order Management**: When an order is placed, it is saved as an instance of the Order model.

## Technologies Used

- **Django**: Framework for building the web application.
- **Bootstrap**: CSS framework for styling and responsive design.
- **jQuery**: Library for handling JavaScript events and AJAX operations.
- **JavaScript**: For handling cart operations and dynamic content updates.


## Usage
- **Add Products to Cart**: Click the "Add to Cart" button on a product to add it to your cart.
- **Buy Now**: Click the "Buy Now" button to add the product to the cart and be redirected to the checkout page.
- **View Cart**: Click the cart icon in the navbar to view cart contents and proceed to checkout.
- **Remove Items from Cart**: Use the "Remove" button next to items in the cart popover to remove specific items.
- **Persistent Cart**: Cart items are stored in the browser's localStorage, allowing them to persist across page reloads.
- **Place Orders**: When an order is placed, the cart data is saved as an instance of the Order model in the Django backend.

## My Learnings
- **Django Fundamentals**: Gained experience in building models, views, and templates with Django.
- **Bootstrap Styling**: Used Bootstrap for designing responsive and modern UI elements.
- **JavaScript Integration**: Implemented dynamic functionality such as cart management and product filtering.
- **Pagination**: Added pagination to handle large lists of products efficiently.
- **Search Functionality**: Implemented a search feature to filter products by name.
- **LocalStorage**: Utilized browser localStorage for maintaining cart state.
- **Order Management**: Implemented backend order management with Django models.

## Contributing
Contributions are welcome! Please feel free to submit a pull request.
