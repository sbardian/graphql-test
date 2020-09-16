export const returnTodo = (todo) => {
  return {
    id: todo.id,
    description: todo.description,
    completed: todo.completed,
    priority: todo.priority,
    createdAt: todo.createdAt,
    updatedAt: todo.updatedAt,
  }
}
