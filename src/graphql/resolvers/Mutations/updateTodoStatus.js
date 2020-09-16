import { pubsub } from '../../../server/pubsub'
import { TODO_UPDATED } from '../iterators'

export const updateTodoStatus = async (
  root,
  { TodoInfo: { id, completed } },
  { models: { Todo } },
) => {
  const todoUpdated = await Todo.findByIdAndUpdate(
    id,
    { completed },
    { new: true },
  )
  pubsub.publish(TODO_UPDATED, {
    todoUpdated: {
      ...todoUpdated,
      __typename: 'Todo',
    },
  })
  return todoUpdated
}
