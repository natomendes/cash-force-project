import { ContentHeader, ContentDisplay } from '@/presentation/components'
import Styles from './dashboard-content-styles.scss'
import React from 'react'

const DashboardContent: React.FC = () => {
  return (
    <div className={Styles.content}>
      <ContentHeader />
      <ContentDisplay />
    </div>
  )
}

export default DashboardContent
