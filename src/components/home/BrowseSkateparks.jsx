import { useEffect, useState } from "react";
import ParkGrid from '../ParkGrid';
import '../components-css/Browseskateparks.css';
import DropdownFilter from "../ParkFilters";


export default function BrowseSkateparks({
  parks,
  filtered,
  filters,
  setFilters,
  ParkSearch,
  DropdownFilter,
  onParkClick
}) {

  const [visibleCount, setVisibleCount] = useState(9);

    useEffect(() => {
    setVisibleCount(9);
  }, [filtered]);

  return (
    <section id="browse-Skateparks">

      <h2 id="browse-Skateparks-text">Browse Skateparks</h2>

      <ParkSearch
        className="hero-search"
        instant
        placeholder="Search by name, city or country..."
      />

      <div className="filters">
        <DropdownFilter 
          parks={parks}
          selectedCountry={filters.country}
          setSelectedCountry={(country) =>
            setFilters((prev) => ({
              ...prev,
              country,
            }))
          }
          selectedCity={filters.city}
          setSelectedCity={(city) =>
            setFilters((prev) => ({
              ...prev,
              city,
            }))
          }
        />
      </div>

      {/* PARK GRID  */} 
      <section className="section">
        <h2>Browse Skateparks</h2>
        <ParkGrid parks={filtered}
         onParkClick={onParkClick}
         />
      </section>      
        <ParkGrid parks={filtered.slice(0, visibleCount)} />
      </section>  

      {visibleCount < filtered.length ? (
        <button
          id="more-Parks"
          onClick={() => setVisibleCount((prev) => prev + 9)}
        >
          Explore more parks 🡻
        </button>
      ) : (
        <p className="no-more-parks">
          You have reached the end of the parks list 🛹
        </p>
      )}

    </section>
  );
}
