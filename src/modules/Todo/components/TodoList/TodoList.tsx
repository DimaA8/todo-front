import { TodoFilters } from 'modules/Todo/components/TodoFilters'
import { TodoItem } from 'modules/Todo/components/TodoItem'
import { applyFilters } from 'modules/Todo/helpers'
import { useTodo } from 'modules/Todo/stores'

export const TodoList = () => {
  const todos = useTodo((state) => state.todos)
  const filter = useTodo((state) => state.filter)

  return (
    <>
      <TodoFilters />
      <div data-testid="todo-list">
        {todos
          .filter((todo) => applyFilters(todo, filter))
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </div>
    </>
  )
}
