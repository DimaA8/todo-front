export interface Todo {
  id: number
  text: string
  done: boolean
}

export type TodoFilterValue = 'all' | 'active' | 'completed'
export interface TodoFilter {
  text: string
  value: TodoFilterValue
}
