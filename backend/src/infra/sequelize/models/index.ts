import { Sequelize } from 'sequelize'
import * as config from '../config'

const sequelize = new Sequelize(config)

export default sequelize
