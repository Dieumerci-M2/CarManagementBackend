import { Router } from 'express'
import { singUp } from '../../controllers/superuser.controller.js'

const routeAccount = Router();

routeAccount.post( '/new', singUp )

export default routeAccount