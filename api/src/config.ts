export default {
  environment: process.env.ENVIRONMENT || 'dev',
  app: {
    name: process.env.APP_NAME || '@mern-stack/server',
    logLevel: process.env.LOG_LEVEL || 'debug',
  },
  express: {
    host: process.env.EXPRESS_HOST || 'localhost',
    port: process.env.PORT || 3000,
  },
  limitBodyParser: process.env.LIMIT_BODY_PARSER || '10mb',
  cors: {
    optionsSuccessStatus: 200,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE,PATCH,HEAD,OPTIONS',
    exposedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  },
  mongodb: {
    url:'',
    poolsize: '',
    db: ''
  }
}
