# Run Locally

- Move into the root directory and run `npm install`

# Live demo

- Here is the live demo of the project hosted on Vercel. [https://got-app-five.vercel.app/](https://got-app-five.vercel.app/)

# About Project

- This is a small Game of Thrones themed site which primarily uses the open API provided by [https://anapioficeandfire.com](https://anapioficeandfire.com)

## Tech-Stack

- React
- Redux-toolkit

### External libraries

- react-toastify
- react-hooks-use-modal

## Features and pages

1. Homescreen with the GOT background video and menubar.
2. Explore page with a responsive gallery of all the major houses. After expanding the house you can click on the house name to fetch data related to that particular house from the API and display in on a modal screen.
3. Shop page with a tribute to the author in the 1st section and in the 2nd section a list of books fetched from the API and option to add them in your cart.
4. Cart page, which is opened after clicking on the shopping cart icon on the shop page. Here there are options to increase and decrease the quantity, delete an item from cart and clear the cart. The product quantities and total value is also displayed on the right.

## Note

- All the pictures and the video used in the site are static and NOT provided by the API.

## Folder Structure

- The `index.html` fie is stored in the public folder.
- All the code is stored inside the `src` folder.
- Static files are stored in `src/assets`
- All the navigable pages are in `src/pages`
- Individual components are stored in `src/components`
- All the JS files related to Redux-toolkit is in `src/slices`
- The routes are defined in the `src/App.js`
- Since it was a design heavy project, all the CSS files associated with their corresponding pages or components are kept in the same folder wher the particular component/page is.
