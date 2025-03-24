import { act } from 'react'

import { render, screen } from '@testing-library/react'
import { TodoList } from 'modules/Todo/components/TodoList'
import { Todo } from 'modules/Todo/interfaces'
import { useTodo } from 'modules/Todo/stores'

describe('todo list', () => {
  const todos: Todo[] = [
    { id: 0, text: 'todo 1', done: true },
    { id: 1, text: 'todo 2', done: false },
    { id: 2, text: 'todo 3', done: false },
    { id: 3, text: 'todo 4', done: false },
  ]

  it('render all todos', async () => {
    useTodo.setState({
      todos,
      filter: 'all',
    })
    render(<TodoList />)
    const todoList = await screen.findByTestId('todo-list')

    expect(todoList.childElementCount).toEqual(4)
  })

  it('render active todos', async () => {
    useTodo.setState({
      todos,
      filter: 'active',
    })
    render(<TodoList />)
    const todoList = await screen.findByTestId('todo-list')

    expect(todoList.childElementCount).toEqual(3)
  })

  it('render completed todos', async () => {
    useTodo.setState({
      todos,
      filter: 'completed',
    })
    render(<TodoList />)
    const todoList = await screen.findByTestId('todo-list')

    expect(todoList.childElementCount).toEqual(1)
  })

  it('remove completed todos', async () => {
    useTodo.setState({
      todos,
      filter: 'completed',
    })
    render(<TodoList />)
    const clearButton = await screen.findByText('Clear completed')
    act(() => {
      clearButton.click()
    })

    expect(useTodo.getState().todos).toEqual([
      { id: 1, text: 'todo 2', done: false },
      { id: 2, text: 'todo 3', done: false },
      { id: 3, text: 'todo 4', done: false },
    ])
  })
})
