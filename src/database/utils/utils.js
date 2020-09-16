export const returnTodo = (todo) => {
  console.log('todo: ', todo)
  return {
    id: todo.id,
    description: todo.description,
    completed: todo.completed,
    priority: todo.priority,
    created_at: todo.created_at,
    updated_at: todo.updated_at,
  }
}
