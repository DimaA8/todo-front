import { ChangeEvent } from 'react'

import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { defaultFilterValue, filters } from 'modules/Todo/constants/filters'
import { TodoFilterValue } from 'modules/Todo/interfaces'
import { useTodo } from 'modules/Todo/stores'

export const TodoFilters = () => {
  const setFilter = useTodo((state) => state.setFilter)
  const clearCompleted = useTodo((state) => state.clearCompleted)
  const completedCount = useTodo((state) => state.todos.filter((todo) => !todo.done).length)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value as TodoFilterValue)
  }

  return (
    <Box alignItems="center" display="flex">
      <Typography marginRight={2}>{completedCount} items left</Typography>
      <FormControl>
        <RadioGroup defaultValue={defaultFilterValue} onChange={onChange} row>
          {filters.map((filter) => (
            <FormControlLabel control={<Radio />} key={filter.value} label={filter.text} value={filter.value} />
          ))}
        </RadioGroup>
      </FormControl>
      <Button onClick={() => clearCompleted()}>Clear completed</Button>
    </Box>
  )
}
