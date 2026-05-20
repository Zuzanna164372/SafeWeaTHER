import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CurrentWeather from '../components/CurrentWeather'

describe('CurrentWeather component', () => {
  test('renders weather data', () => {
    const weather = {
      current: {
        temperature_2m: 20,
        pressure_msl: 1015,
      },
    }

    render(<CurrentWeather weather={weather} />)

    expect(screen.getByText(/20/i)).toBeInTheDocument()
    expect(screen.getByText(/1015/i)).toBeInTheDocument()
  })
})