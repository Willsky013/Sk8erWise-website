import "./pages-css/About.css";
import AboutFeatures from "../components/AboutFeatures.jsx";
import TeamCreators from "../components/TeamCreators.jsx";

export default function About() {
  return (
    <div className="section about">
      <h1>About Sk8erWise</h1>

      <p>
        Sk8terWise is your travel companion for discovering the best
        skateparks around the world. Whether you're looking for legendary
        street spots or hidden gems, we've got you covered.
      </p>

      <AboutFeatures />

      <TeamCreators />

      <p className="about_note">
        This is a student group project built with React and Vite.
      </p>
    </div>
  );
}
