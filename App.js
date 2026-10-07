import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import Timer from "./components/Timer";      // ✅ Timer component import
import Score from "./components/Score";      // ✅ Score component import
import "./App.css";   // App.css src folder में है

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      {/* ✅ Day-5 demo components */}
      <Timer />
      <Score value={200} />
    </>
  );
}

export default App;
