import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

// Shared search box for skateparks. Two modes:
//  - instant (hero): writes ?q= on every keystroke → live filtering.
//  - deferred (nav): keeps a local draft, commits on submit and navigates
//    to home, so results show no matter what page you searched from.
export default function ParkSearch({
  instant = false,
  className = '',
  placeholder = 'Search parks...',
  ariaLabel = 'Search skateparks',
}) {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const urlQuery = searchParams.get('q') ?? ''
  const [draft, setDraft] = useState(urlQuery)

  const value = instant ? urlQuery : draft

  function handleChange(e) {
    const next = e.target.value
    if (instant) setSearchParams(next ? { q: next } : {})
    else setDraft(next)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!instant) navigate(draft ? `/?q=${encodeURIComponent(draft)}` : '/')
  }

  return (
    <form className={className} onSubmit={handleSubmit} role="search">
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        aria-label={ariaLabel}
      />
      {!instant && <button type="submit">Search</button>}
    </form>
  )
}
