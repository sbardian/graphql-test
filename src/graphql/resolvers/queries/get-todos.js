/* eslint-disable array-callback-return, consistent-return */

const getOrderByInputField = (orderByInput) => {
  const orderByInputFields = Object.keys(orderByInput)
  if (orderByInputFields.length !== 1) {
    throw new Error(
      `orderBy input list items may only contain 1 field (received: ${orderByInputFields})`,
    )
  }
  return orderByInputFields[0]
}

const createOrderBy = (orderBy = []) => {
  const customOrderBy = orderBy.map((orderByInput) => {
    const field = getOrderByInputField(orderByInput)
    switch (field) {
      case 'priority':
        return ['priority', orderByInput[field]]
      case 'description':
        return ['description', orderByInput[field]]
      case 'created_at':
        return ['created_at', orderByInput[field]]
      default:
        break
    }
  })
  return customOrderBy.length > 0 ? customOrderBy : []
}

export const getTodos = async (
  root,
  { orderBy = [], completed = null },
  { loaders: { getTodosLoader }, models: { Todo } },
) => {
  const sort = createOrderBy(orderBy)
  let todos
  if (completed === null) {
    todos = await Todo.find({}).sort(sort)
  } else {
    todos = await Todo.find({ completed: { $eq: completed } }).sort(sort)
  }
  return todos.map((todo) => getTodosLoader.load(todo.id))
}
