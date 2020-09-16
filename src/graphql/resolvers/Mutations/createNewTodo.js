import { returnTodo } from '../../../database/utils/utils'

export const createNewTodo = async (
  root,
  { TodoInfo: { description, priority = 1, completed = false } },
  { models: { Todo } },
) => {
  if (!description) {
    throw new Error('A description is required')
  }
  const newTodo = await Todo.create({
    description,
    priority,
    completed,
  })
  return returnTodo(newTodo)
}
