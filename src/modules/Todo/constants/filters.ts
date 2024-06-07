import { TodoFilter, TodoFilterValue } from 'modules/Todo/interfaces'

export const filters: TodoFilter[] = [
  { text: 'All', value: 'all' },
  { text: 'Active', value: 'active' },
  { text: 'Completed', value: 'completed' },
]
export const defaultFilterValue: TodoFilterValue = 'all'
