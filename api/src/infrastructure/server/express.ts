import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import compression from 'compression'
import config from '../../config'
import { default as logger } from '../logger'
import { default as routes } from './routes'

export let app = express()

// Enable CORS
app.use(cors(config.cors))
app.options('*', cors(config.cors))

// Enable body parser
app.use(bodyParser.json({ limit: config.limitBodyParser }))

// Enable compression
app.use(compression())

// Register all routes
app.use(routes)

app.get('/', (req, res) => {
  res.send(`🚀\tWELCOME TO THIS SAMPLE API`)
})

export const start = () => {
  app.listen(config.express.port, () => {
    logger.info(`🚀\tListening on http://${config.express.host}:${config.express.port}`)
  })
}
