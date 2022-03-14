import "./styles.css";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Home from "./componets/Home";
import Contact from "./componets/Contact";
import About from "./componets/About";

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}
