import { useState } from "react";
import "./Home.css";
import video from "../../assets/got.mp4";
import { Link } from "react-router-dom";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <section className={menuOpen ? "showcase active" : "showcase"}>
        <header>
          <Link to="/">
            <h2 className="logo">C i t a d e l</h2>
          </Link>
          <div
            className={menuOpen ? "toggle active" : "toggle"}
            onClick={() => setMenuOpen(!menuOpen)}
          ></div>
        </header>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="text">
          <p>
            In the far southwest of Westeros, at the mouth of the river
            Honeywine, lies the great stone city of Oldtown. It is home to the
            Citadel, where men and boys from throughout the Seven Kingdoms come
            to receive their training as Maesters.
          </p>
          <Link to="/explore" className="explore">
            Enter The World of Ice and Fire
          </Link>
        </div>
      </section>
      <div className="menu">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/explore">GOT world</Link>
          </li>
          <li>
            <Link to="/shop">shop</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
