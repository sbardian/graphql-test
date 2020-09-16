import { returnTodo } from '../../../database/utils/utils'
import { pubsub } from '../../../server/pubsub'
import { TODO_DELETED } from '../iterators'

export const deleteTodo = async (root, { id }, { models: { Todo } }) => {
  const deletedTodo = returnTodo(await Todo.findByIdAndRemove(id))
  pubsub.publish(TODO_DELETED, {
    todoDeleted: {
      ...deletedTodo,
      __typename: 'Todo',
    },
  })
  return deletedTodo
}
