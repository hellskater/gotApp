// CORE
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// EXTERNAL LIB.
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// INTERNAL
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Explore from "./pages/explore/Explore";
import NotFound from "./components/notFound/NotFound";
import Cart from "./pages/cart/Cart";

// STYLESHEET
import "./App.css";

function App() {
  return (
    <Router>
      <ToastContainer />
      <div className="App">
        <Routes>
          <Route exact path="/shop" element={<Shop />} />

          <Route exact path="/cart" element={<Cart />} />

          <Route path="/not-found" element={<NotFound />} />

          <Route exact path="/explore" element={<Explore />} />

          <Route exact path="/" element={<Home />} />

          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
