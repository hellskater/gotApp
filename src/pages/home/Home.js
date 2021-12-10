// CORE
import { useState } from "react";
import { Link } from "react-router-dom";

// INTERNAL - Background video
import video from "../../assets/got.mp4";

// STYLESHEET
import "./Home.css";

function Home() {
  // HOOKS
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* If toggle is active then apply the "active" class */}
      <section className={menuOpen ? "showcase active" : "showcase"}>
        <header>
          {/* LOGO AND LINK TO HOME SCREEEN */}
          <Link to="/">
            <h2 className="logo">C i t a d e l</h2>
          </Link>
          <div
            className={menuOpen ? "toggle active" : "toggle"}
            onClick={() => setMenuOpen(!menuOpen)}
          ></div>
        </header>
        {/* Backround Video */}
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        {/* Overlay effect applied on the video */}
        <div className="overlay"></div>

        {/* Text to display on the video */}
        <div className="text">
          <p>
            In the far southwest of Westeros, at the mouth of the river
            Honeywine, lies the great stone city of Oldtown. It is home to the
            Citadel, where men and boys from throughout the Seven Kingdoms come
            to receive their training as Maesters.
          </p>

          {/* Link to the explore page */}
          <Link to="/explore" className="explore">
            Enter The World of Ice and Fire
          </Link>
        </div>
      </section>

      {/* MENUBAR */}
      <div className="menu">
        <ul>
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
