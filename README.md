# Run Locally

- Move into the root directory and run `npm install`

# Live demo

- Here is the live demo of the project hosted on Vercel. [https://got-app-five.vercel.app/](https://got-app-five.vercel.app/)

# About Project

- This is a small Game of Thrones themed site which primarily uses the open API provided by [https://anapioficeandfire.com](https://anapioficeandfire.com)

# Preview

![Screenshot (481)](https://user-images.githubusercontent.com/47584722/145552134-f06583cc-f1af-4d63-839a-a70780aa3b86.png)
![Screenshot (482)](https://user-images.githubusercontent.com/47584722/145552179-f07f8d8e-62f0-49fa-a92f-483ea6077458.png)
![Screenshot (483)](https://user-images.githubusercontent.com/47584722/145552211-3a6f8775-2fad-4d07-8ef3-44fb49f3bd77.png)
![Screenshot (484)](https://user-images.githubusercontent.com/47584722/145552228-2d99a9c3-f7f2-4caa-ba76-68fd191f7a5b.png)
![Screenshot (485)](https://user-images.githubusercontent.com/47584722/145552242-90c753fc-3f0a-4fd0-a1a7-c5a1d3fdbb4e.png)
![Screenshot (486)](https://user-images.githubusercontent.com/47584722/145552263-686089cb-77fd-4f12-a028-439c6fc497ee.png)
![Screenshot (487)](https://user-images.githubusercontent.com/47584722/145552275-cd25c738-e258-4276-8236-a4c347b54af2.png)
![Screenshot (488)](https://user-images.githubusercontent.com/47584722/145552287-a1839399-84a5-4cad-bc1d-dbfe51079f21.png)
![Screenshot (489)](https://user-images.githubusercontent.com/47584722/145552301-f1187101-52a0-45e3-b645-cad99679e12c.png)


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
