import { Todo, TodoFilterValue } from 'modules/Todo/interfaces'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface UseTodo {
  todos: Todo[]
  filter: TodoFilterValue

  addTodo: (text: string) => void
  markTodo: (id: number) => void
  unmarkTodo: (id: number) => void
  clearCompleted: () => void
  setFilter: (filter: TodoFilterValue) => void
}

export const useTodo = create<UseTodo>()(
  immer((set) => ({
    todos: [],
    filter: 'all',

    setFilter: (filter) => set({ filter }),
    addTodo: (text) =>
      set(({ todos }) => {
        todos.push({
          id: todos.length,
          text,
          done: false,
        })
      }),

    markTodo: (id) =>
      set(({ todos }) => {
        const foundTodo = todos.find((todo) => todo.id === id)

        if (foundTodo) {
          foundTodo.done = true
        }
      }),

    unmarkTodo: (id) =>
      set(({ todos }) => {
        const foundTodo = todos.find((todo) => todo.id === id)

        if (foundTodo) {
          foundTodo.done = false
        }
      }),

    clearCompleted: () =>
      set(({ todos }) => ({
        todos: todos.filter((todo) => !todo.done),
      })),
  })),
)
