const notFoundRoute = (req, res, next) => {
  const error = new Error(`Not Found ${req.originalUrl}`)
  res.status(404)
  next(error)
}
//custom mw to handel errors
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export { notFoundRoute, errorHandler }
