import './pages-css/Home.css'

export default function Home() {
  return (
    <main className="home">

      <section id="hero">
        <div id="hero-Text">
          <h1 id='welcome-Text'>Discover the best skateparks around the world</h1>
          <p>Your travel guide to amazing skateparks.</p>
          <p>Find, explore and save your favorites</p>

        </div>
        <div id="popular-Skateparks">
          <h2>Popular Skateparks</h2>


        </div>
      </section>

      <div id="browse-Skateparks">
        <h2 id="browse-Skateparks-text">Browse Skateparks</h2>



        <button id='more-Parks'>
          Explore more parks 🡻
        </button>
      </div>
    </main>
  )
}
