import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import SkateparkDetails from "./pages/SkateparkDetails.jsx";
import Favorites from "./pages/Favorites.jsx";
import About from "./pages/About.jsx";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/park/:id" element={<SkateparkDetails />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}