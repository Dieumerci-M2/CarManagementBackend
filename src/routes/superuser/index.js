import { Router } from 'express'
import routerAccount from './superuser.routes.js'

const superRoute = Router()

superRoute.use( '/account', routerAccount )

export default superRoute
