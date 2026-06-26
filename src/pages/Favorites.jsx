import { Link } from 'react-router-dom'
import { useFavorites } from '../hooks/useFavorites.js'
import { parks } from '../hooks/useParks.js'
import ParkGrid from '../components/ParkGrid.jsx'

import './pages-css/Favorites.css'

export default function Favorites() {
  const { favorites } = useFavorites()
  const savedParks = parks.filter((park) => favorites.includes(park.id))

  return (
    <div className="section">
      <h1>Your Favorite Skateparks</h1>
      <ParkGrid
        parks={savedParks}
        emptyMessage="You haven't saved any skateparks yet - explore parks and tap the star to save them."
      />
      {savedParks.length === 0 && (
        <p><Link to="/">Explore skateparks →</Link></p>
      )}
    </div>
  )
}
