import { Model, DataTypes } from 'sequelize'
import { Cnpj } from './Cnpj'
import db from '.'

export class Sponsor extends Model {
  declare id: number
  declare name: string
  declare tradingName: string
  declare cashforceTax: string
  declare responsibleName: string
  declare responsibleEmail: string
  declare responsiblePosition: string
  declare responsiblePhone: string
  declare responsibleMobile: string
  declare website: string
  declare postalCode: string
  declare address: string
  declare number: string
  declare complement: string
  declare neighborhood: string
  declare city: string
  declare state: string
  declare bank: string
  declare bankAgency: string
  declare account: string
  declare phoneNumber: string
  declare situation: string
  declare situationDate: string
  declare email: string
  declare cnpjId: number
  declare createdAt: Date
  declare updatedAt: Date
}

Sponsor.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: { type: DataTypes.STRING, allowNull: false },
  tradingName: { type: DataTypes.STRING, defaultValue: null },
  cashforceTax: { type: DataTypes.STRING, defaultValue: null },
  responsibleName: { type: DataTypes.STRING, defaultValue: null },
  responsibleEmail: { type: DataTypes.STRING, defaultValue: null },
  responsiblePosition: { type: DataTypes.STRING, defaultValue: null },
  responsiblePhone: { type: DataTypes.STRING, defaultValue: null },
  responsibleMobile: { type: DataTypes.STRING, defaultValue: null },
  website: { type: DataTypes.STRING, defaultValue: null },
  postalCode: { type: DataTypes.STRING, defaultValue: null },
  address: { type: DataTypes.STRING, defaultValue: null },
  number: { type: DataTypes.STRING, defaultValue: null },
  complement: { type: DataTypes.STRING, defaultValue: null },
  neighborhood: { type: DataTypes.STRING, defaultValue: null },
  city: { type: DataTypes.STRING, defaultValue: null },
  state: { type: DataTypes.STRING, defaultValue: null },
  bank: { type: DataTypes.STRING, defaultValue: null },
  bankAgency: { type: DataTypes.STRING, defaultValue: null },
  account: { type: DataTypes.STRING, defaultValue: null },
  phoneNumber: { type: DataTypes.STRING, defaultValue: null },
  situation: { type: DataTypes.STRING, defaultValue: null },
  situationDate: { type: DataTypes.STRING, defaultValue: null },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  email: { type: DataTypes.STRING, defaultValue: null },
  cnpjId: {
    type: DataTypes.INTEGER,
    defaultValue: null,
    references: {
      model: 'cnpjs',
      key: 'id'
    }
  }
}, {
  sequelize: db,
  tableName: 'sponsors'
})

Sponsor.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' })
Cnpj.hasOne(Sponsor, { foreignKey: 'cnpjId', as: 'cnpj' })