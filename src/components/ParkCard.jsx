import './components-css/ParkCard.css'
import FavoriteButton from './FavoriteButton'

export default function ParkCard( {park} ) {

    return(
    <div id = "parkCard">
        <FavoriteButton parkId={park.id} />
        <img src={`${import.meta.env.BASE_URL}${park.images[0]}`} alt={park.name} id="parkImage" />
        <h2>{park.name}</h2>
        <h3>{park.city}, {park.country}</h3>
        <span id = "levelMarking">{park.difficulty}     </span>
        <span id = "ratingMarking">{park.rating}</span>
    </div>
    );
}
