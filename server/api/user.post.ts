import userSchema from '../mongoose/models/user.schema'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)
  userSchema.create({ email, password })
  return email
})
