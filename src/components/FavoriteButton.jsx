import { useFavorites } from '../hooks/useFavorites.js'
import './components-css/FavoriteButton.css'

// Toggles a park in/out of the favorites list (persisted in localStorage).
export default function FavoriteButton({ parkId }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const active = isFavorite(parkId)

  return (
    <button
      type="button"
      className={`fav-btn ${active ? 'is-active' : ''}`}
      onClick={() => toggleFavorite(parkId)}
      aria-pressed={active}
      aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      title={active ? 'Remove from favorites' : 'Add to favorites'}
    >
      {active ? '★' : '☆'}
      {/* {active ? '♥' : '♡'} //tomt hjärta renderar inte i alla fonts..  */}
    </button>
  )
}
