import Styles from './display-header-styles.scss'
import React from 'react'

const DisplayHeader: React.FC = () => {
  return (
    <div className={Styles.displayHeader}>
      <p className={Styles.headerItem}>Nota Fiscal</p>
      <p className={Styles.headerItem}>Sacado</p>
      <p className={Styles.headerItem}>Cedente</p>
      <p className={Styles.headerItem}>Emissão</p>
      <p className={Styles.headerItem}>Valor</p>
      <p className={Styles.headerItem}>Status</p>
      <p className={Styles.headerItem} />
    </div>
  )
}

export default DisplayHeader
