export const updateTodoStatus = async (
  root,
  { TodoInfo: { id, completed } },
  { models: { Todo } },
) => {
  return Todo.findByIdAndUpdate(id, { completed }, { new: true })
}
