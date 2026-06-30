import './components-css/ParkCard.css'
import FavoriteButton from './FavoriteButton'
import { FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import ParkDetailModal from './ParkDetailModal';
import { useState } from "react";

export default function ParkCard({ park }) {

    const stars = Array(5).fill(0);

    let levelColor = "gray";

    if (park.difficulty === "Beginner") {
        levelColor = "green";
    } else if (park.difficulty === "Intermediate") {
        levelColor = "yellow";
    } else if (park.difficulty === "Advanced") {
        levelColor = "red";
    }

    let starColoring = park.rating*20;

    console.log(park);

    const [modal, setModal] = useState(false);

    function toggle() {
        setModal(!modal)
    }
    
    return(
    <>
        <div className = "parkCard" onClick = {toggle}>
            <div onClick={(e) => e.stopPropagation()}>
                <FavoriteButton parkId={park.id} />
            </div>
            <img 
            src={`${import.meta.env.BASE_URL}${park.images[0].replace(/^\//, "")}`} 
            alt = {park.name} className = "parkImage" />
            <h2>{park.name}</h2>
            <h3>{park.city}, {park.country}</h3>
            <div className = "inforow">
                <span className = "levelMarking" style = {{ color: levelColor }}> <FaCircle /></span>
                <div className = "ratingMarking">
                    <span className = "emptyStars">{stars.map((_, index) => <FaStar key = {index} />)}</span>
                    <span className = "filledStars" style = {{ width: `${starColoring}%` }}>{stars.map((_, index) => <FaStar key = {index} />)}</span>
                </div>
            </div>
        </div>

        {modal && (
            <ParkDetailModal key = {park.id} park = {park}/>
        )}
    </>
    );
}
