import { useState } from "react";
import '../components-css/PopularSkateparks.css'
import ParkCard from "../ParkCard.jsx";

const featuredParks = [
  {
    id: 1,
    image: "/src/assets/hero.png",
    title: "Central Skatepark",
    country: "Sweden",
    city: "Stockholm",
    level: "Intermediate",
    rating: "4.5"
  },
  {
    id: 2,
    image: "/src/assets/hero.png",
    title: "Street Park",
    country: "Sweden",
    city: "Uppsala",
    level: "Beginner",
    rating: "4.0"
  },
  {
    id: 3,
    image: "/src/assets/hero.png",
    title: "Concrete Bowl",
    country: "Sweden",
    city: "Malmö",
    level: "Advanced",
    rating: "4.8"
  }
];

export default function PopularSkateparks() {
  
    const [start, setStart] = useState(0);

  const visiblePark = featuredParks[start];

  return (
    <div id="popular-Skateparks">
      <h2>Popular Skateparks</h2>

       {/* show of the card and adds buttons for prev on the left sid and next on the right */}

      <div className="carousel">

        <button
          className="prev"
          onClick={() => setStart((s) => Math.max(s - 1, 0))}
        >
          &#10094;
        </button>

        <div className="cards">
          {featuredParks[start] && (
            <ParkCard 
              key={featuredParks[start].id}
              park={featuredParks[start]}
            />
          )}
        </div>

        <button
          className="next"
          onClick={() =>
            setStart((s) =>
              Math.min(s + 1, featuredParks.length - 1)
            )
          }
        >
          &#10095;
        </button>

      </div>

      {/* Adds dots under the parkcard showing how many the are in 'featuredParks' and the one your on */}

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
  )
}