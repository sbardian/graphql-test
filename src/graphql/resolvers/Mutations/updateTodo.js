export const updateTodo = async (
  root,
  { TodoInfo: { id, description = null, priority = null } },
  { models: { Todo } },
) => {
  if (!description) {
    console.log('priority')
    return Todo.findByIdAndUpdate(id, { priority }, { new: true })
  }
  if (!priority) {
    console.log('description')
    return Todo.findByIdAndUpdate(id, { description }, { new: true })
  }
  return Todo.findByIdAndUpdate(id, { description, priority }, { new: true })
}
