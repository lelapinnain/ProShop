import express from 'express'
import dotenv from 'dotenv'

import colors from 'colors'

import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFoundRoute, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()
const app = express()

app.use('/api/products', productRoutes)
app.use(notFoundRoute)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  return console.log(
    `server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
})
