import { MongoClient } from 'mongodb'
import config from '../config'

let _db = null
const _connect = async () => {
  if (_db) {
    return _db
  }
  const client = await MongoClient.connect(config.mongodb.url, {
    useNewUrlParser: true,
    poolSize: config.mongodb.poolsize,
  })

  _db = client.db(config.mongodb.db)
  return _db
}

export default {}
