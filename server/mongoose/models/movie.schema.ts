import mongoose from 'mongoose'
import bcrypt from 'mongoose-bcrypt'

const schema = new mongoose.Schema(
  {
    title: { type: String, unique: true },
    director: String,
    releaseYear: Number
  },
  { timestamps: true, strict: true, strictQuery: true }
)

export default mongoose.model('Movie', schema, 'movies')
