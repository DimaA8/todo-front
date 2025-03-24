import { act } from 'react'

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TodoInput } from 'modules/Todo/components/TodoInput'
import { useTodo } from 'modules/Todo/stores'

describe('todo input', () => {
  it('add todo', async () => {
    render(<TodoInput />)
    const todoInput = (await screen.findByLabelText('What needs to be done?')) as HTMLInputElement
    const addButton = await screen.findByText('Add')
    act(() => {
      userEvent.type(todoInput, 'hello')
      addButton.click()
    })

    waitFor(() => {
      expect(useTodo.getState().todos).toBe([{ id: 0, text: 'hello', done: false }])
    })
  })
})
