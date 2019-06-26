# MadeByCodera GraphQL Test

## Description

You are tasked with writing the GraphQL api for a new Todo List mobile app.
The structure of the Todo according to the frontend developer should look like the following:

### Todo
Field        | Data Type     | Description
------------ | ------------- | -------------
id           | UUID          | Unique identifier for the todo.
description  | String        | Describes what the todo is.
createdAt    | Date          | Tells us when the todo was created. Defaults to current datetime.
completed    | Boolean       | Indicates if the todo is complete. Defaults to false.
priority     | Int           | 1 is the highest priority. Defaults to 1.

And the frontend developer is counting on you to implement the following operations in the GraphQL api:
1. **List Todos** - Retrieved todos can be sorted by the `priority`, `createdAt`, or `description` fields in ascending or descending order. There is no sorting by default. And the todos can also be filtered by the `completed` field.
2. **Create todo** - `description` is required. `priority` is optional and should default to 1. The rest of the fields: `id`, `createdAt`, and `completed` should have defaults supplied for them 
3. **Update todo** - Should update a todo based on the `id` provided in the request. `description` and/or `priority` fields can be updated. `priority` must be 1 or greater if sent in request.
4. **Mark todo complete** - Should update a todo's `complete` field to `true` based on the `id` provided in the request.
4. **Delete todo** - Should delete a todo based on the `id` provided in the request.

## Instructions
1. Fork this repository. Do all of your work on your personal fork.
2. You must implement this graphql backend using [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
3. You can use whatever data structure you are most comfortable with for storing the data such as in-memory, MySQL, Postgres, SQLite, MongoDB, etc... . Using Postgres is preferred and considered a plus, since that is what we use currently.
4. This repo should be an npm project such that we can install the dependencies that you define for the server in order to run it using Node.

## NOTE
If you are not storing the data in-memory, please commit a sql dump of the database schema to the repo. Please add a note of where this file is located in this `README.md` if the sql dump is not located at the root of the repo. Your submission will be discarded if you DONT include a sql dump for your implementation that uses a database.
