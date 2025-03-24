import { act } from 'react'

import { render, screen } from '@testing-library/react'
import { TodoFilters } from 'modules/Todo/components/TodoFilters'
import { useTodo } from 'modules/Todo/stores'

describe('todo filters', () => {
  it('switch filters', async () => {
    useTodo.setState({
      filter: 'all',
    })
    render(<TodoFilters />)
    const activeFilter = await screen.findByLabelText('Active')
    const completedFilter = await screen.findByLabelText('Completed')
    const allFilter = await screen.findByLabelText('All')

    act(() => {
      activeFilter.click()
    })

    expect(useTodo.getState().filter).toBe('active')

    act(() => {
      completedFilter.click()
    })

    expect(useTodo.getState().filter).toBe('completed')

    act(() => {
      allFilter.click()
    })

    expect(useTodo.getState().filter).toBe('all')
  })
})
