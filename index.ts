import express from 'express'
import { autoPingServers } from './controllers/ping'
import routes from './routes'
import helmet from 'helmet'
import cors from 'cors'

// Create an instance of Express
const app = express()
export const PORT: number = 5000

// Set an interval to automatically ping servers every 5 minutes (300000 ms) plus a random delay between 0 and 20000 ms
setInterval(autoPingServers, 300000 + Math.floor(Math.random() * 20000))

// Middleware to parse JSON bodies
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/ping', routes.pingRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to the Ping Server!')
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
