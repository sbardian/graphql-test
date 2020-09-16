import faker from 'faker'

faker.seed(1337)

export const insertMockTodos = (count) =>
  Array.from(Array(count), () => ({
    description: faker.lorem.sentence(),
    completed: false,
    priority: 1,
  }))
