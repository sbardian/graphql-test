export const getTodos = async (
  root,
  _,
  { loaders: { getTodosLoader }, models: { Todo } },
) => {
  const todos = await Todo.find({})
  return todos.map((todo) => getTodosLoader.load(todo.id))
}
