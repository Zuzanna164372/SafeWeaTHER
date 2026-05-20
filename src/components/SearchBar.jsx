import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!city.trim()) return

    onSearch(city)
    setCity('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Wpisz miasto..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">Szukaj</button>
    </form>
  )
}

export default SearchBar