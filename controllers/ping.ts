import { Request, Response } from 'express'
import axios from 'axios'

export const serversToPing: string[] = ['https://iuh-tse-club-be.onrender.com']

// Function to ping servers periodically
export const autoPingServers = (): void => {
  serversToPing.forEach(async (server: string) => {
    try {
      const response = await axios.get(server)
      console.log(`Ping to ${server} successful: Status ${response.status}`)
    } catch (error: any) {
      console.error(`Ping to ${server} failed: ${error.message}`)
    }
  })
}

// Endpoint to retrieve the list of servers to ping
export const getRetrieveServer = (req: Request, res: Response) => {
  res.json({
    servers: serversToPing,
  })
}

// Endpoint to add a new server to the ping list
export const postAddServer = (req: Request, res: Response) => {
  const { server } = req.body
  if (server) {
    serversToPing.push(server)
    res.json({
      message: `Server ${server} added to the ping list`,
    })
  } else {
    res.status(400).json({
      error: 'Server parameter is required',
    })
  }
}

// Remove a server from the ping list.
export const deleteRemoveServer = (req: Request, res: Response) => {
  const { server } = req.body
  if (server) {
    const index = serversToPing.indexOf(server)
    if (index !== -1) {
      serversToPing.splice(index, 1)
      res.json({
        message: `Server ${server} removed from the ping list`,
      })
    } else {
      res.status(404).json({
        error: `Server ${server} not found in the ping list`,
      })
    }
  } else {
    res.status(400).json({
      error: 'Server parameter is required',
    })
  }
}
