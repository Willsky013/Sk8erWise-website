function ParkDetailModal({ park, onClose }) {
  if (!park) return null;

  return (
    <div className="modal-overlay">
      <div className="park-detail-modal">
        <button className="modal-close-btn" onClick={onClose}>
          ×
        </button>

        <img src={park.image} alt={park.name} />

        <h2>{park.name}</h2>
        <p>{park.description}</p>

        <h3>Amenities</h3>
        <ul>
          {park.amenities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p>Rating: ⭐ {park.rating}</p>
      </div>
    </div>
  );
}

export default ParkDetailModal;