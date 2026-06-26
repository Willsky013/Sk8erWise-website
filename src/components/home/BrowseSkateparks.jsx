import ParkGrid from '../ParkGrid';
import '../components-css/Browseskateparks.css';


export default function BrowseSkateparks({
  filters,
  setFilters,
  query,
  type,
  setType,
  filtered,
  ParkSearch,
  DropdownFilter
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
        <DropdownFilter type="country" setFilters={setFilters} />
        <DropdownFilter type="city" setFilters={setFilters} />
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
