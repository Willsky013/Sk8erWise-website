import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORTANT: adjust this path depending on where Navbar.jsx is located
import Navbar from "./components/Navbar";  
// or: import Navbar from "./components/Navbar.jsx";

import Home from "./pages/Home.jsx";
import SkateparkDetails from "./pages/SkateparkDetails.jsx";
import Favorites from "./pages/Favorites.jsx";
import About from "./pages/About.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="app_main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/park/:id" element={<SkateparkDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
