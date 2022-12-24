import env from '../../main/config/env'

const config = {
  username: env.mySqlUsername,
  password: env.mySqlPassword,
  database: env.mySqlDatabase,
  host: env.mySqlHost,
  port: env.mySqlPort,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z'
  },
  logging: false,
  seederStorage: 'sequelize'
}

module.exports = config
