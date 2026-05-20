function WeatherCard({ date, maxTemp, minTemp }) {
  return (
    <div className="weather-card">
      <h3>{date}</h3>

      <div className="card-temp">
        <p>☀ {Math.round(maxTemp)}°</p>

        <p>🌙 {Math.round(minTemp)}°</p>
      </div>
    </div>
  )
}

export default WeatherCard
