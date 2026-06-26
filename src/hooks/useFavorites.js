import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'skater-favorites'

// Read the saved list of favorite park ids from localStorage.
function readFavorites() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

// Hook for reading and updating favorites. Stays in sync across components and
// browser tabs via the `storage` event.
export function useFavorites() {
  const [favorites, setFavorites] = useState(readFavorites)

  // Keep multiple mounted components in sync.
  useEffect(() => {
    function handleStorage(e) {
      if (e.key === STORAGE_KEY) setFavorites(readFavorites())
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const persist = useCallback((next) => {
    setFavorites(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }, [])

  const isFavorite = useCallback(
    (parkId) => favorites.includes(parkId),
    [favorites],
  )

  const toggleFavorite = useCallback(
    (parkId) => {
      const next = favorites.includes(parkId)
        ? favorites.filter((id) => id !== parkId)
        : [...favorites, parkId]
      persist(next)
    },
    [favorites, persist],
  )

  return { favorites, isFavorite, toggleFavorite }
}
