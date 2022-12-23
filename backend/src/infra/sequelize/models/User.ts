import { Model, DataTypes } from 'sequelize'
import db from '.'

class User extends Model {
  declare id: number
  declare username: string
  declare email: string
  declare phoneNumber: string
  declare mobile: string
  declare departament: string
  declare verificationCode: string
  declare emailChecked: number
  declare cashforceAdm: number
  declare createdAt: Date
  declare updatedAt: Date
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phoneNumber: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  mobile: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  departament: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  verificationCode: {
    type: DataTypes.STRING,
    defaultValue: null
  },
  emailChecked: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  cashforceAdm: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  underscored: true,
  sequelize: db,
  tableName: 'users'
})

export default User
