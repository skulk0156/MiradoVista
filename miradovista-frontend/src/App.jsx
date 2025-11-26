import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      {/* Prevent content hiding behind navbar */}
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
