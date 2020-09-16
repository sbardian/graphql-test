import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    completed: Boolean,
    priority: Number,
    created_at: Date,
    updated_at: Date,
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
)

const Todo = mongoose.model('Todo', TodoSchema)

export default Todo
