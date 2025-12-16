import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./pages/AboutUs";

function Home() {
  return (
    <div className="container">
      <h1>Welcome to Simple React App</h1>
      <p>This is a simple landing page</p>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
