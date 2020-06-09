import * as dotenv from 'dotenv'
import { server } from './infrastructure'

dotenv.config()
server.start()
