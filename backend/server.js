import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import colors from 'colors'
import mogran from 'morgan'

import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

import { notFoundRoute, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()
const app = express()
if (process.env.NODE_ENV === 'development') {
  app.use(mogran('dev'))
}
app.use(express.json())
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/confing/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)
// this line because es moudles doesn't support __dirname so i have to manually resolve it
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFoundRoute)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  return console.log(
    `server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
})
