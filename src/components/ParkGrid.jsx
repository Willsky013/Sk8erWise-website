import ParkCard from "./ParkCard";

function ParkGrid({ parks = [], loading = false }) {
  if (loading) {
    return (
      <section className="park-grid">
        <p>Loading skateparks...</p>
      </section>
    );
  }

  if (parks.length === 0) {
    return (
      <section className="park-grid-empty">
        <h2>No skateparks found 🛹</h2>
        <p>Try changing your search or filters.</p>
      </section>
    );
  }

  return (
    <section className="park-grid">
      {parks.map((park) => (
        <ParkCard
          key={park.id}
          park={park}
        />
      ))}
    </section>
  );
}

export default ParkGrid;