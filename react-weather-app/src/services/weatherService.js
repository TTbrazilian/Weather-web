
import axios from 'axios'

const apiKey = import.meta.env.VITE_WEATHER_API_KEY

export const getWeatherByCity = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather`,
    {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric',
        lang: 'pt_br'
      }
    }
  )
  return response.data
}
