
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getWeatherByCity } from '../services/weatherService'

function CityDetail() {
  const { name } = useParams()
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    getWeatherByCity(name).then(setWeather).catch(() => setWeather(null))
  }, [name])

  if (!weather) return <p>Carregando...</p>

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Clima em {weather.name}</h2>
      <p>🌡 Temperatura: {weather.main.temp}°C</p>
      <p>💧 Umidade: {weather.main.humidity}%</p>
      <p>🌬 Vento: {weather.wind.speed} m/s</p>
      <p>🌥 Condição: {weather.weather[0].description}</p>
    </div>
  )
}

export default CityDetail
