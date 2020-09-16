import { returnTodo } from '../../../database/utils/utils'
import { pubsub } from '../../../server/pubsub'
import { TODO_STATUS_UPDATED } from '../iterators'

export const updateTodoStatus = async (
  root,
  { TodoInfo: { id, completed } },
  { models: { Todo } },
) => {
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
