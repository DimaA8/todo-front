import { FC } from 'react'

import { Box, Checkbox, Typography } from '@mui/material'
import { Todo } from 'modules/Todo/interfaces'
import { useTodo } from 'modules/Todo/stores'

interface Props {
  todo: Todo
}

export const TodoItem: FC<Props> = ({ todo }) => {
  const markTodo = useTodo((state) => state.markTodo)
  const unmarkTodo = useTodo((state) => state.unmarkTodo)

  const onChange = () => {
    if (!todo.done) {
      markTodo(todo.id)
    } else {
      unmarkTodo(todo.id)
    }
  }

  return (
    <Box alignItems="center" display="flex">
      <Checkbox checked={todo.done} onChange={onChange} role="todo-item" />
      <Typography onClick={onChange} sx={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </Typography>
    </Box>
  )
}
