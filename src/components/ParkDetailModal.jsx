import "./components-css/ParkDetailModal.css";
import ImageSlider from "./ImageSlider";

function ParkDetailModal({ park, onClose }) {
  if (!park) return null;

  // const image =
  //   park.images?.[0]
  //     ? `${import.meta.env.BASE_URL}${park.images[0].replace(/^\//, "")}`
  //     : park.image;

  const images = park.images?.map((img) => `${import.meta.env.BASE_URL}${img.replace(/^\//, "")}`) || [park.image];

  console.log(images);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="park-detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          ×
        </button>

        <div className="image-slider-container">
          <ImageSlider images={images} />
        </div>

        <h2>{park.name}</h2>
        <p>{park.description}</p>

        <h3>Amenities</h3>
        <ul>
          {(park.amenities || []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p>Rating: ⭐ {park.rating}</p>
      </div>
    </div>
  );
}

export default ParkDetailModal;