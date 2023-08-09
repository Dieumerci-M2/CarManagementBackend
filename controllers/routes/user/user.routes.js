import { Router } from 'express'

import { signUp } from '../../user.controller.js'

const routerAccount = Router();

routerAccount.post( '/new', signUp );

export default routerAccount;