import { useState } from "react";
import '../components-css/PopularSkateparks.css'
import ParkGrid from "../ParkGrid.jsx";
import Parks from "../../data/parks.json";



export default function PopularSkateparks() {

  const featuredParks = Parks.filter(
  (park) => [115, 107, 106].includes(Number(park.id))
  );

  console.log(featuredParks);
  
  const [start, setStart] = useState(0);

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
            <ParkGrid 
              key={featuredParks[start].id}
              parks={[featuredParks[start]]}
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

      {/* Adds dots under the parkGrid showing how many the are in 'featuredParks' and the one your on */}

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