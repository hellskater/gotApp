import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Explore from "./pages/explore/Explore";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/shop" element={<Shop />} />

          <Route exact path="/explore" element={<Explore />} />

          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
