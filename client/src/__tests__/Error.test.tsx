import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import ItemList from '../pages/ItemList/ItemList'
import * as api from '../api'

// 👇 mock fetchItems to throw an error
vi.spyOn(api, 'fetchItems').mockRejectedValue(new Error('network error'))

test('shows error state when fetch fails', async () => {
  render(<ItemList />)

  // wait until the error message appears
  await waitFor(() => {
    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })
})
