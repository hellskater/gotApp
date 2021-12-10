// CORE
import { Link } from "react-router-dom";

// STYLESHEET
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      {/* LOGO AND LINK TO HOMESCREEN */}
      <Link to="/">
        <p className="logoN">C i t a d e l</p>
      </Link>
      <h2>404</h2>
      <p>Page not found</p>
    </div>
  );
};

export default NotFound;
