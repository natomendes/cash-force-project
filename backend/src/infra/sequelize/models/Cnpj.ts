import { Model, DataTypes } from 'sequelize'
import db from '.'

class Cnpj extends Model {
  declare id: number
  declare cnpjNumber: string
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
  cnpjNumber: { type: DataTypes.STRING, allowNull: false, unique: true, field: 'cnpj' },
  companyType: { type: DataTypes.STRING, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
  sequelize: db,
  tableName: 'cnpjs'
})

export default Cnpj
