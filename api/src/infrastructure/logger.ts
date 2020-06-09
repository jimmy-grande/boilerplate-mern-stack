import pino from 'pino'
import config from '../config'

const l = pino({
  name: config.app.name,
  level: config.app.logLevel,
  base: { name: 'name' },
})

export default l
