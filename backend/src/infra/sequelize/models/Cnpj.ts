import { Model, DataTypes } from 'sequelize'
import db from '.'

export class Cnpj extends Model {
  declare id: number
  declare cnpj: string
  declare companyType: string
  declare createdAt: Date
  declare updatedAt: Date
}

Cnpj.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  companyType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  underscored: true,
  sequelize: db,
  tableName: 'cnpjs'
})
