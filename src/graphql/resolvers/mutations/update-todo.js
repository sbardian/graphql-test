import { returnTodo } from '../../../database/utils/utils'
import { pubsub } from '../../../server/pubsub'
import { TODO_UPDATED } from '../iterators'

export const updateTodo = async (
  root,
  { TodoInfo: { id, description = null, priority = null } },
  { models: { Todo } },
) => {
  let updatedTodo
  if (priority <= 0) {
    throw new Error(`If provided priority must be greater than or equal to one`)
  }
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
