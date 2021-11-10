import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'A Allam',
    email: 'a@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'J Allam',
    email: 'j@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
