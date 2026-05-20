import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SearchBar from '../components/SearchBar'

describe('SearchBar component', () => {
  test('renders input field', () => {
    render(<SearchBar onSearch={() => {}} />)

    const input = screen.getByPlaceholderText('Wpisz miasto...')

    expect(input).toBeInTheDocument()
  })
})