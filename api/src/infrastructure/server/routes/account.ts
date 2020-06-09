import { Router } from 'express'
import * as accountController from '../../../adapters/controllers/account'

export default (router: Router) => {
    router.get('/account', accountController.getAccount)
}
