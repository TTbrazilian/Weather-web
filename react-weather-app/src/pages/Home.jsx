
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [city, setCity] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (city.trim()) {
      navigate(`/city/${city.trim()}`)
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🌦 Ver o Clima</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Digite uma cidade..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  )
}

export default Home
