import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (error) {
      console.error(error)
      //  console.log('1')
      res.status(401)
      throw new Error('Not authorized token failed')
    }
  }
  if (!token) {
    console.log('2')
    res.status(401)
    throw new Error('Not authorized no token provided')
  }
})

const admin = (req, res, next) => {
  //console.log(req.user)
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not Authorized as admin')
  }
}

export { protect, admin }
