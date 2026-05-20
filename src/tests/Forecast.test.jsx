import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Forecast from '../components/Forecast'

describe('Forecast component', () => {
  test('renders forecast cards', () => {
    const daily = {
      time: ['2026-05-20'],
      temperature_2m_max: [25],
      temperature_2m_min: [15],
    }

    render(<Forecast daily={daily} />)

    expect(screen.getByText(/25/i)).toBeInTheDocument()
    expect(screen.getByText(/15/i)).toBeInTheDocument()
  })
})