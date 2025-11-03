import { Router } from 'express'
import {
  deleteUser,
  getUsers,
  login,
  signUp,
  updateUsers,
} from '../controllers/user.js'

export const userRoute = Router()

userRoute
  .post('/signUp', signUp)
  .post('/login', login)
  .get('/', getUsers)
  .patch('/:id', updateUsers)
  .delete('/:id', deleteUser)
