import { returnTodo } from '../../../database/utils/utils'
// import { pubsub } from '../../../server/server'

export const deleteTodo = async (root, { id }, { models: { Todo } }) => {
  const deletedTodo = returnTodo(await Todo.findByIdAndRemove(id))
  // pubsub.publish(`LIST_DELETED`, {
  //   listDeleted: {
  //     ...deletedList,
  //     __typename: 'List',
  //   },
  // });
  return deletedTodo
}
