import { returnTodo } from '../../../database/utils/utils'
import { pubsub } from '../../../server/pubsub'
import { TODO_UPDATED } from '../iterators'

export const updateTodo = async (
  root,
  { TodoInfo: { id, description = null, priority = null } },
  { models: { Todo } },
) => {
  let updatedTodo
  if (!description && priority) {
    updatedTodo = returnTodo(
      await Todo.findByIdAndUpdate(id, { priority }, { new: true }),
    )
  } else if (!priority && description) {
    updatedTodo = returnTodo(
      await Todo.findByIdAndUpdate(id, { description }, { new: true }),
    )
  } else {
    updatedTodo = returnTodo(
      await Todo.findByIdAndUpdate(
        id,
        { description, priority },
        { new: true },
      ),
    )
  }
  pubsub.publish(TODO_UPDATED, {
    todoUpdated: {
      ...updatedTodo,
      __typename: 'Todo',
    },
  })
  return updatedTodo
}
