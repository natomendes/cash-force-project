import Styles from './dashboard-content-display-styles.scss'
import React, { useContext } from 'react'
import DisplayHeader from './display-header/display-header'
import { DashboardContext } from '@/presentation/contexts'
import DisplayItem from './display-item/display-item'

const ContentDisplay: React.FC = () => {
  const { orders } = useContext(DashboardContext)
  return (
      <div className={Styles.contentDisplay}>
        <DisplayHeader />
        {
          orders.map((order) => (
            <DisplayItem order={order} key={order.id} />
          ))
        }
      </div>
  )
}

export default ContentDisplay
