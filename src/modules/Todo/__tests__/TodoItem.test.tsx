import { act } from 'react'

import { render, screen } from '@testing-library/react'
import { TodoItem } from 'modules/Todo/components/TodoItem'
import { Todo } from 'modules/Todo/interfaces'
import { useTodo } from 'modules/Todo/stores'

describe('todo item', () => {
  it('mark todo', async () => {
    const todo: Todo = { id: 0, text: 'todo 1', done: false }
    useTodo.setState({
      todos: [todo],
      filter: 'all',
    })
    render(<TodoItem todo={todo} />)
    const todoItem = await screen.findByText('todo 1')
    act(() => {
      todoItem.click()
    })

    expect(useTodo.getState().todos).toEqual([{ id: 0, text: 'todo 1', done: true }])
  })

  it('unmark todo', async () => {
    const todo: Todo = { id: 0, text: 'todo 1', done: true }
    useTodo.setState({
      todos: [todo],
      filter: 'all',
    })
    render(<TodoItem todo={todo} />)
    const todoItem = await screen.findByText('todo 1')
    act(() => {
      todoItem.click()
    })

    expect(useTodo.getState().todos).toEqual([{ id: 0, text: 'todo 1', done: false }])
  })
})
