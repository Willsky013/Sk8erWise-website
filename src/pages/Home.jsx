import { useState } from "react";
import { useSearchParams } from 'react-router-dom'
import ParkSearch from '../components/ParkSearch.jsx'
import './pages-css/Home.css'
import DropdownFilter from '../components/FilterButton'
import { useFilteredParks } from '../hooks/useParks.js'
import PopularSkateparks from "../components/PopularSkateparks.jsx";

export default function Home() {

  const [filters, setFilters] = useState({
  country: "",
  city: ""
  });
  
  //for search bar
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const [type, setType] = useState(null)
  const filtered = useFilteredParks(query, { type })

  return (
    <main className="home">

      <section id="hero">
        <div id="hero-Text">
          <h1 id='welcome-Text'>Discover the best skateparks around the world</h1>
          <p>Your travel guide to amazing skateparks.</p>
          <p>Find, explore and save your favorites</p>

        </div>

        <PopularSkateparks />

      </section>

      <div id="browse-Skateparks">

        <h2 id="browse-Skateparks-text">Browse Skateparks</h2>
        
        <ParkSearch className="hero-search" instant placeholder="Search by name, city or country..." />
        
        <div className="filters">
          <DropdownFilter type="country" setFilters={setFilters}/>
          <DropdownFilter type="city" setFilters={setFilters}/>
        </div>



      </div>

      <button id='more-Parks'>
          Explore more parks 🡻
      </button>

    </main>
  )
}