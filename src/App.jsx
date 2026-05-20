import { useEffect, useState } from 'react'

import CurrentWeather from './components/CurrentWeather'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import SearchBar from './components/SearchBar'
import Forecast from './components/Forecast'

import {
  fetchWeather,
  fetchCityCoordinates,
  fetchCityName,
} from './services/weatherApi'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [cityName, setCityName] = useState('Warsaw')

  async function loadWeatherByCity(city) {
    try {
      setLoading(true)
      setError('')

      const cityData = await fetchCityCoordinates(city)

      const weatherData = await fetchWeather(
        cityData.latitude,
        cityData.longitude
      )

      setWeather({
        current: weatherData.current,
        daily: weatherData.daily,
      })

      setCityName(cityData.name)
    } catch (err) {
      setError('Nie udało się pobrać pogody')
    } finally {
      setLoading(false)
    }
  }

  async function loadWeatherByLocation(latitude, longitude) {
    try {
      setLoading(true)
      setError('')

      const cityData = await fetchCityName(latitude, longitude)

      const weatherData = await fetchWeather(latitude, longitude)

      setWeather({
        current: weatherData.current,
        daily: weatherData.daily,
      })

      setCityName(cityData.name)
    } catch (err) {
      setError('Nie udało się pobrać lokalizacji')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        loadWeatherByLocation(latitude, longitude)
      },
      () => {
        loadWeatherByCity('Warsaw')
      }
    )
  }, [])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage message={error} />
  }

  return (
  <div
  className={`app-container ${
    weather
      ? weather.current.temperature_2m <= 0
        ? 'cold'
        : weather.current.temperature_2m < 10
        ? 'rainy'
        : weather.current.temperature_2m < 20
        ? 'cloudy'
        : 'sunny'
      : ''
  }`}
>
    <div className="weather-app">
      <h1 className="logo">SafeWeaTHER</h1>

      <SearchBar onSearch={loadWeatherByCity} />

      <div className="main-weather-card">
        <h2 className="city-name">{cityName}</h2>

        {weather && <CurrentWeather weather={weather} />}
      </div>

      {weather?.daily && <Forecast daily={weather.daily} />}
    </div>
  </div>
)
}

export default App