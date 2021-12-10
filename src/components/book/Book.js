// REDUX TOOLKIT
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";

// STYLESHEET
import "./Book.css";

function Book({ cover, name, price, id }) {
  // HOOKS
  const dispatch = useDispatch();

  // METHODS
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <img
            src={cover}
            alt="Game of Thrones - Book 1"
            className="card__img"
          />

          <div className="card__data">
            <span className="card__preci">{`$${price}`}</span>
            <p className="card__description">{name}</p>

            {/* Item details are dispatched to the cart as one object */}
            <button
              className="card__button"
              onClick={() => handleAddToCart({ name, price, id, cover })}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
