import { returnTodo } from '../../../database/utils/utils'
import { pubsub } from '../../../server/pubsub'
import { TODO_ADDED } from '../iterators'

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
  pubsub.publish(TODO_ADDED, {
    todoAdded: {
      ...newTodo,
      __typename: 'Todo',
    },
  })
  return returnTodo(newTodo)
}
