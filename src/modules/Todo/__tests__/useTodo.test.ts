import { act, renderHook } from '@testing-library/react'
import { useTodo } from 'modules/Todo/stores'

describe('todo store', () => {
  it('clear todos by default', () => {
    const { result } = renderHook(() => useTodo())

    expect(result.current.todos).toEqual([])
  })

  it('add todo', () => {
    const { result } = renderHook(() => useTodo())
    result.current.todos = []
    act(() => {
      result.current.addTodo('todo')
    })

    expect(result.current.todos).toEqual([{ id: 0, text: 'todo', done: false }])
  })

  it('mark todo', () => {
    const { result } = renderHook(() => useTodo())
    result.current.todos = [{ id: 0, text: 'todo', done: false }]
    act(() => {
      result.current.markTodo(0)
    })

    expect(result.current.todos).toEqual([{ id: 0, text: 'todo', done: true }])
  })

  it('unmark todo', () => {
    const { result } = renderHook(() => useTodo())
    result.current.todos = [{ id: 0, text: 'todo', done: true }]
    act(() => {
      result.current.unmarkTodo(0)
    })

    expect(result.current.todos).toEqual([{ id: 0, text: 'todo', done: false }])
  })

  it('clear completed', () => {
    const { result } = renderHook(() => useTodo())
    result.current.todos = [
      { id: 0, text: 'todo', done: true },
      { id: 1, text: 'todo', done: true },
      { id: 2, text: 'todo', done: false },
    ]
    act(() => {
      result.current.clearCompleted()
    })

    expect(result.current.todos).toEqual([{ id: 2, text: 'todo', done: false }])
  })
})
