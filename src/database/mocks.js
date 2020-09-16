import faker from 'faker'

faker.seed(1337)

export const insertMockTodos = (count, completed = false) =>
  Array.from(Array(count), () => ({
    description: faker.lorem.sentence(),
    completed,
    priority: 1,
  }))
