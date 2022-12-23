import { Model, DataTypes } from 'sequelize'
import { Order } from './Order'
import db from '.'

export class OrderPortion extends Model {
  declare id: number
  declare nDup: string
  declare dVenc: string
  declare vDup: string
  declare availableToMarket: number
  declare orderId: number
  declare createdAt: Date
  declare updatedAt: Date
}

OrderPortion.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nDup: { type: DataTypes.STRING, allowNull: false },
  dVenc: { type: DataTypes.STRING, allowNull: false },
  vDup: { type: DataTypes.STRING, allowNull: false },
  availableToMarket: { type: DataTypes.INTEGER, defaultValue: 1 },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  orderId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    references: {
      model: 'orders',
      key: 'id'
    }
  }
}, {
  sequelize: db,
  tableName: 'orderportions'
})

OrderPortion.belongsTo(Order, { foreignKey: 'cnpjId', as: 'cnpj' })
Order.hasOne(OrderPortion, { foreignKey: 'cnpjId', as: 'cnpj' })
