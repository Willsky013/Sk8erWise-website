import ParkCard from "./ParkCard";
import "./components-css/ParkGrid.css";

function ParkGrid({ parks, emptyMessage = 'No parks match your search.', loading = false, onParkClick }) {
  if (loading) {
    return (
      <section className="park-grid">
        <p>Loading skateparks...</p>
      </section>
    );
  }

  if (!parks.length) {
    return <p className="park-grid-empty">{emptyMessage}</p>
  }  

  return (
    <section className="park-grid">
      {parks.map((park) => (
        <ParkCard
          key={park.id}
          park={park}
          onClick={() => onParkClick(park)}
        />
      ))}
    </section>
  );
}

export default ParkGrid;