export default {
  mySqlUsername: 'root',
  mySqlPassword: '123456',
  mySqlDatabase: 'cashforce_v3',
  mySqlHost: process.env.MYSQL_DBHOST || 'database',
  mySqlPort: 3306,
  jwtSecret: 'cashforce_secret',
  port: 5050
}
