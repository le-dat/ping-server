import { Router } from 'express'
import {
  getRetrieveServer,
  postAddServer,
  deleteRemoveServer,
} from '../controllers/ping'

const postRoutes = Router()

postRoutes.get('/', getRetrieveServer)
postRoutes.post('/', postAddServer)
postRoutes.delete('/', deleteRemoveServer)

export default postRoutes
