import { Model, DataTypes } from 'sequelize'
import Order from './Order'
import db from '.'
import Sponsor from './Sponsor'

class Offer extends Model {
  declare id: number
  declare nDup: string
  declare dVenc: string
  declare vDup: string
  declare availableToMarket: number
  declare orderId: number
  declare createdAt: Date
  declare updatedAt: Date
}

Offer.init({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  tax: { type: DataTypes.STRING, allowNull: false },
  tariff: { type: DataTypes.STRING, allowNull: false },
  adValorem: { type: DataTypes.STRING, allowNull: false },
  float: { type: DataTypes.STRING, allowNull: false },
  iof: { type: DataTypes.STRING, allowNull: false },
  expiresIn: { type: DataTypes.DATE, allowNull: false },
  paymentStatusSponsor: { type: DataTypes.INTEGER, defaultValue: 0 },
  paymentStatusProvider: { type: DataTypes.INTEGER, defaultValue: 0 },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  orderId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    references: {
      model: 'orders',
      key: 'id'
    }
  },
  sponsorId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    references: {
      model: 'sponsors',
      key: 'id'
    }
  }
}, {
  sequelize: db,
  tableName: 'offers'
})

Offer.belongsTo(Order, { foreignKey: 'cnpjId' })
Order.hasOne(Offer, { foreignKey: 'cnpjId' })

Offer.belongsTo(Sponsor, { foreignKey: 'cnpjId' })
Sponsor.hasMany(Offer, { foreignKey: 'cnpjId' })

export default Offer
