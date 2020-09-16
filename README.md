## Description

Todos GraphQL API

### Environment Variables

- PORT: configure the server at a specific port.
- If there is no port environment variable the server will use port `9999`

### Data

- data is in an in-memory mongodb database.
- When the server is started it will populate the database with 10 mock todo
  items.

### Accessing GraphQL Playground

- use the following url to access the GraphQL Playground once the server is
  started.

> Update the port if you provided a PORT environment variable.

```
http://localhost:9999/graphql
```

### Example Queries

> Be sure to update the `id`'s in the queries that require them. You can get
> `id`s by using the first `gettodos` query.

```
query gettodos {
  getTodos(orderBy: [{ priority: ASC }, { description: DESC }, { createdAt: ASC }], completed: false) {
    id
    description
    priority
    completed
    createdAt
    updatedAt
  }
}

mutation updateStatus {
  updateTodoStatus(
    TodoInfo: { id: "5f61a86d66596996a87e6007", completed: true }
  ) {
    id
    description
    priority
    completed
    createdAt
    updatedAt
  }
}

mutation updateTodo {
  updateTodo(TodoInfo: { id: "5f61a8215bda4c9668fa1b73", priority: 10 }) {
    id
    description
    priority
    completed
    createdAt
    updatedAt
  }
}

mutation delete {
  deleteTodo(id: "5f61934e64257e89be72b3c9") {
    id
    description
    priority
    completed
    createdAt
    updatedAt
  }
}

mutation create {
  createNewTodo(TodoInfo: { description: "aba", completed: false }) {
    id
    description
    priority
    completed
    createdAt
    updatedAt
  }
}
```
