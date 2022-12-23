import { LoadUserOrdersRepo } from '@/data/protocols/load-user-order-repo'
import { OrderModel } from '@/domain/models/order'
import Buyer from '@/infra/sequelize/models/Buyer'
import Order from '@/infra/sequelize/models/Order'
import Provider from '@/infra/sequelize/models/Provider'

export class OrderMySqlRepository implements LoadUserOrdersRepo {
  async loadByUserId (userId: string): Promise<OrderModel[]> {
    const orders = await Order.findAll({
      attributes: ['id', 'orderNumber', 'emissionDate', 'value', 'orderStatusBuyer'],
      include: [
        { model: Buyer, attributes: ['id', 'name'] },
        { model: Provider, attributes: ['id', 'name'] }
      ],
      where: {
        userId
      }
    })

    return orders
  }
}
