import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import ItemList from '../pages/ItemList/ItemList.tsx'
import * as api from '../api'

// Mock data
const mockItems = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  price: 10 + i,
  description: 'desc',
  category: 'cat',
  image: 'https://via.placeholder.com/64'
}))

vi.spyOn(api, 'fetchItems').mockImplementation(async () => mockItems)

test('renders list of items after fetch', async () => {
  render(<ItemList />)
  // shows loader
  expect(screen.getByText(/loading/i)).toBeInTheDocument()

  // waits for items to render
  await waitFor(() =>
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument()
  )

  // first product should appear
  expect(screen.getByText(/product 1/i)).toBeInTheDocument()
})
