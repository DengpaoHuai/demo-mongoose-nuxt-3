import users from '../../mongoose/models/user.schema'

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)
  try {
    const userData = await users.findOne({
      email
    })
    if (userData) {
      console.log(`User with email ${email} already exists`)
      event.res.statusCode = 409
      return {
        code: 'USER_EXISTS',
        message: 'User with given email already exists.'
      }
    } else {
      console.log('Create user')
      const newUserData: any = await users.create({
        email,
        password
      })
      return {
        id: newUserData._id
      }
    }
  } catch (err) {
    console.dir(err)
    event.res.statusCode = 500
    return {
      code: 'ERROR',
      message: 'Something wrong.'
    }
  }
})
