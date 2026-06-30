import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import ParkSearch from "../components/ParkSearch.jsx";
import DropdownFilter from "../components/FilterButton.jsx";
import { useFilteredParks } from "../hooks/useParks.js";

import HeroSection from "../components/home/HeroSection.jsx";
import PopularSkateparks from "../components/home/PopularSkateparks.jsx";
import BrowseSkateparks from "../components/home/BrowseSkateparks.jsx";
import ParkDetailModal from "../components/ParkDetailModal.jsx";

import "./pages-css/Home.css";

export default function Home() {
  const [filters, setFilters] = useState({
    country: "",
    city: "",
  }); 
  const [selectedPark, setSelectedPark] = useState(null); 
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const [type, setType] = useState(null);
  const filtered = useFilteredParks(query, { type });

  return (
    <main className="home">

      {/* DESKTOP LAYOUT FIX — both components inside #hero */}
      <div id="hero">
        <HeroSection />
        <PopularSkateparks />
      </div>

      {/* BROWSE SECTION */}
      <BrowseSkateparks
        filters={filters}
        setFilters={setFilters}
        query={query}
        type={type}
        setType={setType}
        filtered={filtered}
        ParkSearch={ParkSearch}
        DropdownFilter={DropdownFilter}
        onParkClick={setSelectedPark}
      />
      

<ParkDetailModal
  park={selectedPark}
  onClose={() => setSelectedPark(null)}
/>
    </main>
  );
}
