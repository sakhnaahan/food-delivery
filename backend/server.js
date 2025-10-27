import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import 'dotenv/config'
import { connectDB } from './config/db.js'
import userRouter from './routes/userRoutes.js'

dotenv.config()

const app = express()

// middleware
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174']
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
  })
)
app.use(express.json())
app.use(express.urlencoded({ extends: true }))

// database
connectDB()

// routes
app.use('/api/user', userRouter)

app.get('/', (req, res) => {
  res.send('API WORKING')
})

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
)
