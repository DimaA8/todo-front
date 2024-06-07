import { Typography } from '@mui/material'
import { TodoInput } from 'modules/Todo/components/TodoInput'
import { TodoList } from 'modules/Todo/components/TodoList'

export const TodoBlock = () => (
  <>
    <Typography variant="h1">Todo</Typography>
    <TodoInput />
    <TodoList />
  </>
)
