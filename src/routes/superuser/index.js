import { Router } from 'express'
import routerAccount from './superuser.routes.js'

const superRoute = Router()
/**
 * Add to the main route a secondary route specific to the
 * account Sing up of a user or a super user such as middleware
 */
superRoute.use( '/account', routerAccount )

export default superRoute
