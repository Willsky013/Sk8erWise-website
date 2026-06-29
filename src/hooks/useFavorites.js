import { useCallback, useSyncExternalStore } from 'react'

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

// A single shared store backs every useFavorites() consumer in the tab, so all
// FavoriteButtons and the Favorites page render the same list. Without this,
// each hook instance kept its own stale copy and whole-array writes from one
// instance silently overwrote another instance's writes.
let favorites = readFavorites()
const listeners = new Set()

function emit() {
  for (const listener of listeners) listener()
}

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return favorites
}

function setFavorites(next) {
  favorites = next
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  emit()
}

// Keep the store in sync with changes made in other browser tabs.
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      favorites = readFavorites()
      emit()
    }
  })
}

// Hook for reading and updating favorites. All consumers share one store, so a
// toggle in any component is reflected everywhere immediately.
export function useFavorites() {
  const list = useSyncExternalStore(subscribe, getSnapshot)

  const isFavorite = useCallback((parkId) => list.includes(parkId), [list])

  const toggleFavorite = useCallback((parkId) => {
    // Re-read the current store value rather than closing over a snapshot, so
    // a stale render can never clobber a favorite added elsewhere.
    const current = favorites
    const next = current.includes(parkId)
      ? current.filter((id) => id !== parkId)
      : [...current, parkId]
    setFavorites(next)
  }, [])

  return { favorites: list, isFavorite, toggleFavorite }
}
