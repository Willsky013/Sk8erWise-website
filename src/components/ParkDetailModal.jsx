import "./components-css/ParkDetailModal.css";
import ImageSlider from "./ImageSlider";

function ParkDetailModal({ park, onClose }) {
  if (!park) return null;

  const images =
    park.images?.map(
      (img) => `${import.meta.env.BASE_URL}${img.replace(/^\//, "")}`
    ) || [park.image];


  return (
    <div className="modal-overlay" onClick={onClose}>

      <div 
        className="park-detail-modal" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose}
        >×</button>

        {/* IMAGE AREA */}
        <div className="image-container">
          <ImageSlider images={images} />
        </div>


        {/* CONTENT */}
        <div className="park-content">

          <h2>{park.name}</h2>

          <span className="location">
            {park.city}, {park.country} 
          </span>

          <p className="description">{park.description}</p>

          <h3>AMENITIES</h3>

          <ul className="amenities">
            {(park.amenities || []).map((item) => (
              <li key={item}>
                <span className="amenity-icon">
                  ○
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="bottom-section">

            <span className="difficulty">
              {park.difficulty}
            </span>

            <div className="rating">

              <span>
                RATING:
              </span>

              ⭐ {park.rating}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParkDetailModal;