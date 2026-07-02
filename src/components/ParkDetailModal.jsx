import "./components-css/ParkDetailModal.css";
import ImageSlider from "./ImageSlider";
import { X } from "lucide-react";

function ParkDetailModal({ park, onClose }) {
  if (!park) return null;

  const images =
    park.images?.map((img) => `${import.meta.env.BASE_URL}${img.replace(/^\//, "")}`) ||
    [park.image];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="park-detail-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose}>
          <X size={26} />
        </button>

        {/* Image Carousel */}
        <div className="modal-image-section">
          <ImageSlider images={images} />
        </div>

        {/* Title */}
        <h2 className="modal-title">{park.name}</h2>

        {/* Description */}
        <p className="modal-description">{park.description}</p>

        {/* Amenities */}
        <h3 className="modal-subtitle">Amenities</h3>
        <div className="amenities-container">
          {(park.amenities || []).map((item) => (
            <span key={item} className="amenity-chip">
              {item}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="rating-box">
          ⭐ <span>{park.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default ParkDetailModal;
