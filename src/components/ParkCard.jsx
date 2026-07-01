import "./components-css/ParkCard.css";
import FavoriteButton from "./FavoriteButton";
import { FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import ParkDetailModal from './ParkDetailModal';
import { useState } from "react";

export default function ParkCard({ park, onClick }) {
  const stars = Array(5).fill(0);

  let levelColor = "var(--muted)";

  if (park.difficulty === "Beginner") {
    levelColor = "#3ddc84";
  } else if (park.difficulty === "Intermediate") {
    levelColor = "#ffd23f";
  } else if (park.difficulty === "Advanced") {
    levelColor = "#ff3b1f";
  }

  const starColoring = park.rating * 20;

  return (
    <article className="parkCard" onClick={onClick}>
      <div className="card-media">
        <img
          src={`${import.meta.env.BASE_URL}${park.images[0].replace(/^\//, "")}`}
          alt={park.name}
          className="parkImage"
          loading="lazy"
        />
      </div>

      <div className="card-body">
        <div className="card-header">
          <h2 className="card-title">{park.name}</h2>
          <div onClick={(e) => e.stopPropagation()}>
            <FavoriteButton parkId={park.id} />
          </div>
        </div>

        <p className="card-location">
          {park.city}, {park.country}
        </p>

        <div className="inforow">
          <span className="levelMarking">
            <FaCircle className="levelDot" style={{ color: levelColor }} />
            {park.difficulty}
          </span>

          <div className="ratingMarking" title={`${park.rating} / 5`}>
            <span className="emptyStars">
              {stars.map((_, index) => (
                <FaStar key={index} />
              ))}
            </span>

            <span className="filledStars" style={{ width: `${starColoring}%` }}>
              {stars.map((_, index) => (
                <FaStar key={index} />
              ))}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
