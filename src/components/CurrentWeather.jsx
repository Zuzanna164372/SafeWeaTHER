function CurrentWeather({ weather }) {
  const temperature = weather.current.temperature_2m

  let weatherIcon = '☀'

  if (temperature <= 0) {
    weatherIcon = '❄'
  } else if (temperature < 10) {
    weatherIcon = '🌧'
  } else if (temperature < 20) {
    weatherIcon = '⛅'
  } else {
    weatherIcon = '☀'
  }

  return (
    <div className="current-weather">
      <div className="big-weather-icon">
        {weatherIcon}
      </div>

      <div className="temperature">
        {Math.round(temperature)}°C
      </div>

      <div className="weather-details">
        <p>🌡 Ciśnienie: {weather.current.pressure_msl} hPa</p>

        <p>📍 Aktualna pogoda</p>
      </div>
    </div>
  )
}

export default CurrentWeather