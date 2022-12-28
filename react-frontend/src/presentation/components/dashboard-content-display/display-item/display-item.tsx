import Styles from './display-item-styles.scss'
import { OrderModel } from '@/domain/models'
import React from 'react'

type Props = {
  order: OrderModel
}

const DisplayItem: React.FC<Props> = ({ order }: Props) => {
  const value = (Number(order.value) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  const date = new Date(order.emissionDate).toLocaleString('pt-BR', { dateStyle: 'short' })
  const statusOptions = [
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
  return (
    <div className={Styles.displayItem}>
      <p>{order.orderNumber}</p>
      <p>{order.Buyer.name}</p>
      <p>{order.Provider.name}</p>
      <p>{date}</p>
      <p className={Styles.greenColor}>{value}</p>
      <p className={Styles.greenColor}>{statusOptions[order.orderStatusBuyer]}</p>
      <p className={Styles.borderedParagraph}>Dados do cedente</p>
    </div>
  )
}

export default DisplayItem
