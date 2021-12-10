// CORE
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Font Awesome library to use the shopping cart icon
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// REDUX TOOLKIT
import { useSelector, useDispatch } from "react-redux";
import { getTotals } from "../../slices/cartSlice";

// INTERNAL
import author from "../../assets/author.jpg";
import { bookData, quotes } from "../../assets/bookData";
import Book from "../../components/book/Book";

// STYLESHEET
import "./Shop.css";

function Shop() {
  // HOOKS
  const [books, setBooks] = useState([]);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Get the cart information from Redux to show the number of items on cart
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  // Fetch book data from API when the component renders for the first time
  useEffect(() => {
    async function getData() {
      await fetch("https://www.anapioficeandfire.com/api/books")
        .then((res) => res.json())
        .then((json) => setBooks(json))
        .catch((err) => console.err(err));
    }
    getData();
  }, []);

  return (
    <div className="shop">
      <div className="authorHeader">
        {/* LOGO AND LINK TO HOME SCREEN */}
        <Link to="/">
          <h2 className="logo">C i t a d e l</h2>
        </Link>
        <p className="authorName">George R. R. Martin</p>

        <p>The Maester of the Maesters</p>
      </div>
      <div className="image">
        {/* Quote paragraph imported from a static JS file and shown here */}
        <p className="quotes">{quotes}</p>
        <img className="author" src={author} alt="GRR Martin" />
      </div>
      <div className="banner">
        <p>Shop across the secret scrolls of the citadel.</p>

        {/* CART ICON */}
        <span className="cart">
          <Link to="/cart">
            <p className="cartBadge">{cart.cartTotalQuantity}</p>
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="3x"
              color="black"
              className="cartIcon"
            />
          </Link>
        </span>
      </div>

      {/* Mapping over retrieved API data and also passing the images and price from static files */}
      <div className="booksContainer">
        {books &&
          books.map((book, index) => (
            <Book
              key={index}
              id={index}
              cover={bookData[index].cover}
              name={book.name}
              price={bookData[index].price}
            />
          ))}
      </div>
    </div>
  );
}

export default Shop;
