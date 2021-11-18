import express from 'express'
import dotenv from 'dotenv'

import colors from 'colors'

import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

import { notFoundRoute, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()
const app = express()
app.use(express.json())
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.get('/api/confing/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)

app.use(notFoundRoute)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  return console.log(
    `server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
})
