import Styles from './dashboard-styles.scss'
import React from 'react'
import { DashboardContent, Sider } from '@/presentation/components'
import { OrderModel } from '@/domain/models'
import { useLoaderData } from 'react-router-dom'
import { DashboardContext } from '@/presentation/contexts'

const Dashboard: React.FC = () => {
  const orders = useLoaderData() as OrderModel[]
  return (
    <DashboardContext.Provider value={{ orders }}>
      <div className={Styles.dashboard}>
        <Sider />
        <div className={Styles.main}>
          <div className={Styles.header} />
          <DashboardContent />
        </div>
      </div>
    </DashboardContext.Provider>
  )
}

export default Dashboard
