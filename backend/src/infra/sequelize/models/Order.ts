import { Model, DataTypes } from 'sequelize'
import Cnpj from './Cnpj'
import db from '.'
import User from './User'
import Buyer from './Buyer'
import Provider from './Provider'
import { OrderBuyer, OrderProvider } from '@/domain/models/order'

class Order extends Model {
  declare id: number
  declare orderNfId: string
  declare orderNumber: string
  declare orderPath: string
  declare orderFileName: string
  declare orderOriginalName: string
  declare emissionDate: string
  declare pdfFile: string
  declare emitedTo: string
  declare nNf: string
  declare CTE: string
  declare value: string
  declare orderStatusBuyer: string
  declare orderStatusProvider: string
  declare deliveryReceipt: string
  declare cargoPackingList: string
  declare deliveryCtrc: string
  declare createdAt: Date
  declare updatedAt: Date
  declare cnpjId: number
  declare userId: number
  declare buyerId: number
  declare providerId: number
  declare buyer: OrderBuyer
  declare provider: OrderProvider
}

Order.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  orderNfId: { type: DataTypes.STRING, allowNull: false, unique: true },
  orderNumber: { type: DataTypes.STRING, allowNull: false },
  orderPath: { type: DataTypes.STRING, defaultValue: null, unique: true },
  orderFileName: { type: DataTypes.STRING, defaultValue: null, unique: true },
  orderOriginalName: { type: DataTypes.STRING, defaultValue: null, unique: true },
  emissionDate: { type: DataTypes.STRING, defaultValue: null },
  pdfFile: { type: DataTypes.STRING, defaultValue: null },
  emitedTo: { type: DataTypes.STRING, allowNull: false },
  nNf: { type: DataTypes.STRING, defaultValue: null },
  CTE: { type: DataTypes.STRING, defaultValue: null },
  value: { type: DataTypes.STRING, defaultValue: null },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  orderStatusBuyer: { type: DataTypes.STRING, defaultValue: '0' },
  orderStatusProvider: { type: DataTypes.STRING, defaultValue: '0' },
  deliveryReceipt: { type: DataTypes.STRING, defaultValue: null },
  cargoPackingList: { type: DataTypes.STRING, defaultValue: null },
  deliveryCtrc: { type: DataTypes.STRING, defaultValue: null },
  cnpjId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    references: {
      model: 'cnpjs',
      key: 'id'
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  buyerId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    references: {
      model: 'buyers',
      key: 'id'
    }
  },
  providerId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    references: {
      model: 'providers',
      key: 'id'
    }
  }
}, {
  sequelize: db,
  tableName: 'orders'
})

Order.belongsTo(Cnpj, { foreignKey: 'cnpjId' })
Cnpj.hasOne(Order, { foreignKey: 'cnpjId' })

Order.belongsTo(User, { foreignKey: 'userId' })
User.hasMany(Order, { foreignKey: 'userId' })

Order.belongsTo(Buyer, { foreignKey: 'buyerId' })
Buyer.hasMany(Order, { foreignKey: 'buyerId' })

Order.belongsTo(Provider, { foreignKey: 'providerId' })
Provider.hasMany(Order, { foreignKey: 'providerId' })

export default Order
