export default function About() {
  return (
    <div className="section about">
      <h1>About Sk8erWise</h1>
      <p>
        Sk8terWise is your travel companion for discovering the best
        skateparks around the world. Whether you're looking for legendary
        street spots or hidden gems, we've got you covered.
      </p>

      <div className="about_cards">
        <div className="about_card">
          <h3>Explore</h3>
          <p>Find skateparks in cities all over the world.</p>
        </div>
        <div className="about_card">
          <h3>Plan</h3>
          <p>Get info about features, difficulty, and more.</p>
        </div>
        <div className="about_card">
          <h3>Save</h3>
          <p>Save your favorite parks and visit them on your next trip.</p>
        </div>
      </div>

      <p className="about_note">
        This is a student group project built with React and Vite.
      </p>
    </div>
  )
}
