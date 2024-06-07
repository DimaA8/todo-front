import { Todo, TodoFilterValue } from 'modules/Todo/interfaces'

export const applyFilters = (todo: Todo, filter: TodoFilterValue) => {
  if (filter === 'active') {
    return !todo.done
  } else if (filter === 'completed') {
    return todo.done
  } else {
    return true
  }
}
