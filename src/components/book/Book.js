import "./Book.css";

function Book({ cover, name, price }) {
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
            <a href="#" className="card__button">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
