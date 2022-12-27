import Styles from './dashboard-styles.scss'
import React from 'react'
import { DashboardContent, Sider } from '@/presentation/components'
import { OrderModel } from '@/domain/models'
import { useLoaderData } from 'react-router-dom'

const Dashboard: React.FC = () => {
  const orders = useLoaderData() as OrderModel[]
  console.log(orders)
  return (
    <div className={Styles.dashboard}>
      <Sider />
      <div className={Styles.main}>
        <div className={Styles.header} />
        <DashboardContent />
      </div>
    </div>
  )
}

export default Dashboard
