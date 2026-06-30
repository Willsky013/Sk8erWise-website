import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import ParkSearch from "../components/ParkSearch.jsx";
import { parks, useFilteredParks } from "../hooks/useParks";

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
    country: "All country",
    city: "All city",
  });

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";

  const [type, setType] = useState(null);
  const filtered = useFilteredParks(query, filters);

  return (
    <main className="home">

      {/* DESKTOP LAYOUT FIX — both components inside #hero */}
      <div id="hero">
        <HeroSection />
        <PopularSkateparks />
      </div>

      {/* BROWSE SECTION */}
      <BrowseSkateparks
        parks={parks}
        filtered={filtered}
        filters={filters}
        setFilters={setFilters}
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
