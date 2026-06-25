import { useState } from "react";

import './pages-css/Home.css'
import DropdownFilter from '../components/FilterButton'

export default function Home() {

  const [filters, setFilters] = useState({
  country: "",
  city: ""
  });

  return (
    <main className="home">

      <section id="hero">
        <div id="hero-Text">
          <h1 id='welcome-Text'>Discover the best skateparks around the world</h1>
          <p>Your travel guide to amazing skateparks.</p>
          <p>Find, explore and save your favorites</p>

        </div>
        <div id="popular-Skateparks">
          <h2>Popular Skateparks</h2>


        </div>
      </section>

      <div id="browse-Skateparks">

        <h2 id="browse-Skateparks-text">Browse Skateparks</h2>
        
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