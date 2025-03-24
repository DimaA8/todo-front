import { ChangeEventHandler, useState } from 'react'

import { Box, Button, TextField } from '@mui/material'
import { useTodo } from 'modules/Todo/stores'

export const TodoInput = () => {
  const [todoText, setTodoText] = useState('')
  const addTodo = useTodo((state) => state.addTodo)

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.value.length < 100) {
      setTodoText(event.target.value)
    }
  }

  const onAdd = () => {
    if (todoText.length) {
      addTodo(todoText)
      setTodoText('')
    }
  }

  return (
    <Box alignItems="center" display="flex">
      <TextField label="What needs to be done?" onChange={onChange} sx={{ flexGrow: 1 }} value={todoText} />
      <Button
        disabled={!todoText.length}
        onClick={onAdd}
        sx={{ marginLeft: 1, alignSelf: 'stretch' }}
        variant="contained"
      >
        Add
      </Button>
    </Box>
  )
}
