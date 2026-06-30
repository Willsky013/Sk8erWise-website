import ParkGrid from '../ParkGrid';
import '../components-css/Browseskateparks.css';
import DropdownFilter from "../ParkFilters";


export default function BrowseSkateparks({
  parks,
  filtered,
  filters,
  setFilters,
  ParkSearch,
}) {
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
        <ParkGrid parks={filtered} />
      </section>      

      <button id="more-Parks">
        Explore more parks 🡻
      </button>

    </section>
  );
}
