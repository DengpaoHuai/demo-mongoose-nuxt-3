import movies from '../../mongoose/models/movie.schema'

export default defineEventHandler(async (event) => {
  const { title, director } = await readBody(event)
  try {
    const movieData = await movies.findOne({
      title
    })
    if (movieData) {
      console.log(`Movie with title ${title} already exists`)
      event.res.statusCode = 409
      return {
        code: 'MOVIE_EXISTS',
        message: 'Movie with given title already exists.'
      }
    } else {
      console.log('Create movie')
      const newMovieData: any = await movies.create({
        title,
        director
      })
      return {
        id: newMovieData._id
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
