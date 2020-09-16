import { returnTodo } from '../../../database/utils/utils'
import { pubsub } from '../../../server/pubsub'
import { TODO_UPDATED } from '../iterators'

export const updateTodo = async (
  root,
  { TodoInfo: { id, description = null, priority = null } },
  { models: { Todo } },
) => {
  let updatedTodo
  if (!description) {
    updatedTodo = returnTodo(
      await Todo.findByIdAndUpdate(id, { priority }, { new: true }),
    )
  }
  if (!priority) {
    updatedTodo = returnTodo(
      await Todo.findByIdAndUpdate(id, { description }, { new: true }),
    )
  }
  updatedTodo = returnTodo(
    await Todo.findByIdAndUpdate(id, { description, priority }, { new: true }),
  )
  pubsub.publish(TODO_UPDATED, {
    todoUpdated: {
      ...updatedTodo,
      __typename: 'Todo',
    },
  })
  return updatedTodo
}
