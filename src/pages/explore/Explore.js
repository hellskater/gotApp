// CORE
import { Link } from "react-router-dom";

// INTERNAL
import House from "../../components/house/House";

// STYLESHEET
import "./Explore.css";

// Array of House names to map over and show on the cards.
//  The name will also be used to fetch the corresponding house details from API
const houseArray = [
  "Stark",
  "Targaryen",
  "Lannister",
  "Baratheon",
  "Tyrell",
  "Martell",
  "Tully",
];

function Explore() {
  return (
    <div className="explores">
      {/* LOGO AND LINK TO HOME SCREEN */}
      <Link to="/">
        <h2 className="logo">C i t a d e l</h2>
      </Link>
      <div className="house-lists">
        {houseArray.map((house, index) => (
          <House key={index} house={house} />
        ))}
      </div>
    </div>
  );
}

export default Explore;
