type OrderProvider = {
  id: number
  name: string
}

type OrderBuyer = {
  id: number
  name: string
}

export interface OrderModel {
  id: number
  orderNumber: string
  buyer: OrderBuyer
  provider: OrderProvider
  emissionDate: string
  value: string
  orderStatusBuyer: [
    'Pendente de confirmação',
    'Pedido confirmado',
    'Não reconhece o pedido',
    'Mercadoria não recebida',
    'Recebida com avaria',
    'Devolvida',
    'Recebida com devolução parcial',
    'Recebida e confirmada',
    'Pagamento Autorizado'
  ]
}
