export async function fetchWeather(latitude, longitude) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,pressure_msl,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
    )

    if (!response.ok) {
      throw new Error('Nie udało się pobrać danych pogodowych')
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function fetchCityCoordinates(city) {
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    )

    if (!response.ok) {
      throw new Error('Nie udało się znaleźć miasta')
    }

    const data = await response.json()

    return data.results[0]
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function fetchCityName(latitude, longitude) {
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${latitude}&longitude=${longitude}`
    )

    if (!response.ok) {
      throw new Error('Nie udało się pobrać nazwy miasta')
    }

    const data = await response.json()

    return data.results?.[0] || { name: 'Unknown location' }
  } catch (error) {
    console.error(error)
    throw error
  }
}