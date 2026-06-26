import '../components-css/Popularskateparks.css';

export default function PopularSkateparks() {
  return (
    <section id="popular-Skateparks">
      <h2>Popular Skateparks</h2>

      <div className="popular-card">
        <img
          src="./Skatepark-images/Venice Beach 1.jpg"
          alt="Venice Skate Park"
          className="popular-image"
        />

        <div className="popular-info">
          <h3>Venice Skate Park</h3>
          <p>Venice, Italy</p>

          <span className="difficulty-badge">Intermediate</span>

          <div className="rating">★★★★☆</div>
        </div>
      </div>
    </section>
  );
}
