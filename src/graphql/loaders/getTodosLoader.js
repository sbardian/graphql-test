import DataLoader from 'dataloader'

export const getTodosLoader = ({ Todo }) =>
  new DataLoader(async (todoIds) => {
    const todos = await Todo.find({ _id: { $in: todoIds } })
    return todoIds.map((todoId) => todos.find(({ id }) => todoId === id))
  })
