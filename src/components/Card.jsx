import "./Card.css"

export default function Card( {park} ) {

    park = {
    image: "src/assets/hero.png",
    title: "Parken",
    country: "Landet",
    city: "Staden",
    level: "Nivån",
    rating: "Betyget",
    }

    return(
    <div id = "parkCard">
        <img src = {park.image} alt = "Här ska kortet sitta" id = "parkImage" />
        <h2>{park.title}</h2>
        <h3>{park.city}, {park.country}</h3>
        <span id = "levelMarking">{park.level}     </span>
        <span id = "ratingMarking">{park.rating}</span>
    </div>
    );
}