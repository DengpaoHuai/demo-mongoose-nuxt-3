import mongoose from 'mongoose'
const schema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: { type: String },
    name: String
  },
  { timestamps: true, strict: true, strictQuery: true }
)
export default mongoose.model('User', schema, 'user')
