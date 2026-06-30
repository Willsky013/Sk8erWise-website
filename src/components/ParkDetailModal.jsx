import "./components-css/ParkDetailModal.css";
function ParkDetailModal({ park, onClose }) {
  if (!park) return null;

  const image =
    park.images?.[0]
      ? `${import.meta.env.BASE_URL}${park.images[0].replace(/^\//, "")}`
      : park.image;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="park-detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          ×
        </button>

        {image && <img src={image} alt={park.name} />}

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