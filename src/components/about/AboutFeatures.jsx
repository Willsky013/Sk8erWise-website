import AboutCard from "./AboutCard.jsx";
import '../components-css/TeaamCreators.css';


export default function AboutFeatures() {
  const cards = [
    {
      title: "Explore",
      text: "Find skateparks in cities all over the world."
    },
    {
      title: "Plan",
      text: "Get info about features, difficulty, and more."
    },
    {
      title: "Save",
      text: "Save your favorite parks and visit them on your next trip."
    }
  ];

  return (
    <div className="about_cards">
      {cards.map((card, index) => (
        <AboutCard key={index} title={card.title} text={card.text} />
      ))}
    </div>
  );
}
