import "./Shop.css";
import author from "../../assets/author.jpg";
import { Link } from "react-router-dom";
import Book from "../../components/book/Book";
import { useEffect, useState } from "react";
import { bookData, quotes } from "../../assets/bookData";

function Shop() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getData() {
      await fetch("https://www.anapioficeandfire.com/api/books")
        .then((res) => res.json())
        .then((json) => setBooks(json));
    }
    getData();
  }, []);

  console.log(books);

  return (
    <div className="shop">
      <div className="authorHeader">
        <Link to="/">
          <h2 className="logo">C i t a d e l</h2>
        </Link>
        <p className="authorName">George R. R. Martin</p>

        <p>The Maester of the Maesters</p>
      </div>
      <div className="image">
        <p className="quotes">{quotes}</p>
        <img className="author" src={author} alt="Picture of GRR Martin" />
      </div>
      <div className="banner">
        <p>Shop across the secret scrolls of the citadel.</p>
      </div>
      <div className="booksContainer">
        {books &&
          books.map((book, index) => (
            <Book
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
