import env from '../../main/config/env'
import { Options } from 'sequelize'

const config: Options = {
  username: env.mySqlUsername,
  password: env.mySqlPassword,
  database: env.mySqlDatabase,
  host: env.mySqlHost,
  port: env.mySqlPort,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z'
  },
  logging: false
}

module.exports = config
