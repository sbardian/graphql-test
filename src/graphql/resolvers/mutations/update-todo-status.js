import { returnTodo } from '../../../database/utils/utils'
import { pubsub } from '../../../server/pubsub'
import { TODO_STATUS_UPDATED } from '../events'

export const updateTodoStatus = async (
  root,
  { TodoInfo: { id, completed } },
  { models: { Todo } },
) => {
  if (typeof completed !== 'boolean') {
    throw new Error(`Completed must be a boolean value (true/false)`)
  }
  const todoStatusUpdated = returnTodo(
    await Todo.findByIdAndUpdate(id, { completed }, { new: true }),
  )
  pubsub.publish(TODO_STATUS_UPDATED, {
    todoStatusUpdated: {
      ...todoStatusUpdated,
      __typename: 'Todo',
    },
  })
  return todoStatusUpdated
}
