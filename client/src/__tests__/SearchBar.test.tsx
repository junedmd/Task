
import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '../components/SearchBar/SearchBar.jsx'

test('search input calls onChange when typed into', () => {
  const onChange = vi.fn()
  render(<SearchBar value="" onChange={onChange} />)

  const input = screen.getByLabelText('search-input') as HTMLInputElement
  fireEvent.change(input, { target: { value: 'hello' } })

  expect(onChange).toHaveBeenCalledWith('hello')
})
