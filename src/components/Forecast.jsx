import WeatherCard from './WeatherCard'

function Forecast({ daily }) {
  return (
    <>
      <h2>Prognoza 7-dniowa</h2>

      <div className="forecast-container">
        {daily.time.map((day, index) => (
          <WeatherCard
            key={day}
            date={day}
            maxTemp={daily.temperature_2m_max[index]}
            minTemp={daily.temperature_2m_min[index]}
          />
        ))}
      </div>
    </>
  )
}

export default Forecast