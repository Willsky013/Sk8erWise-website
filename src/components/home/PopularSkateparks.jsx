import { useState } from "react";
import '../components-css/PopularSkateparks.css'

const featuredParks = [

];

export default function PopularSkateparks() {
  
    const [start, setStart] = useState(0);

  const visibleParks = featuredParks.slice(start, start + 3);

  return (
    <div id="popular-Skateparks">
      <h2>Popular Skateparks</h2>

      <div className="carousel">
        <button
          className="prev"
          onClick={() => setStart((s) => Math.max(s - 1, 0))}
        >
          &#10094;
        </button>

        <div className="cards">
          {visibleParks.map((park) => (
            <PopularSkateparkCard key={park.id} park={park} />
          ))}
        </div>

        <button
          className="next"
          onClick={() =>
            setStart((s) => Math.min(s + 1, featuredParks.length - 3))
          }
        >
          &#10095;
        </button>

        <div className="dots">
        {featuredParks.map((_, index) => (
            <button
            key={index}
            className={`dot ${index === start ? "active" : ""}`}
            onClick={() => {
                setStart(Math.min(index, featuredParks.length - 3));
            }}
            />
        ))}
        </div>
      </div>
    </div>
  );
}