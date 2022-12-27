import Styles from './dashboard-content-display-styles.scss'
import React from 'react'

const ContentDisplay: React.FC = () => {
  return (
      <div className={Styles.contentDisplay}>
        <div className={Styles.displayHeader}>
          <p className={Styles.headerItem}>Nota Fiscal</p>
          <p className={Styles.headerItem}>Sacado</p>
          <p className={Styles.headerItem}>Cedente</p>
          <p className={Styles.headerItem}>Emissão</p>
          <p className={Styles.headerItem}>Valor</p>
          <p className={Styles.headerItem}>Status</p>
          <p className={Styles.headerItem} />
        </div>
        <div className={Styles.displayItem}>
          <p>1234</p>
          <p>Sacado 001</p>
          <p>Cedente 002</p>
          <p>12/02/2020</p>
          <p className={Styles.greenColor}>R$ 49.725,00</p>
          <p className={Styles.greenColor}>Recebido</p>
          <p className={Styles.borderedParagraph}>Dados do cedente</p>
        </div>
        <div className={Styles.displayItem}>
          <p>1234</p>
          <p>Sacado 001</p>
          <p>Cedente 002</p>
          <p>12/02/2020</p>
          <p className={Styles.greenColor}>R$ 49.725,00</p>
          <p className={Styles.greenColor}>Recebido</p>
          <p className={Styles.borderedParagraph}>Dados do cedente</p>
        </div>
        <div className={Styles.displayItem}>
          <p>1234</p>
          <p>Sacado 001</p>
          <p>Cedente 002</p>
          <p>12/02/2020</p>
          <p className={Styles.greenColor}>R$ 49.725,00</p>
          <p className={Styles.greenColor}>Recebido</p>
          <p className={Styles.borderedParagraph}>Dados do cedente</p>
        </div>
      </div>
  )
}

export default ContentDisplay
