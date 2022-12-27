import Styles from './dashboard-styles.scss'
import React from 'react'
import { Logo } from '@/presentation/components'
import { OrderModel } from '@/domain/models'
import { useLoaderData } from 'react-router-dom'

const Dashboard: React.FC = () => {
  const orders = useLoaderData() as OrderModel[]
  console.log(orders)
  return (
    <div className={Styles.dashboard}>
      <div className={Styles.sider}>
        <div className={Styles.siderHeader}>
          <Logo />
        </div>
        <div className={Styles.menu}>
          <div className={Styles.menuItem}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.90625 15.3438V14.8438V9.21875V8.71875H1.40625H6.47398C6.52872 8.64488 6.59785 8.55442 6.68146 8.45205C6.90594 8.17721 7.23453 7.81684 7.67478 7.45398C8.55749 6.72645 9.8916 5.98786 11.7237 5.91258L13.0035 5.85999L12.0978 6.76571L8.96465 9.8989C8.88532 9.97823 8.88532 10.1069 8.96465 10.1862C9.55227 10.7738 10.3233 11.0678 11.0969 11.0678L0.90625 15.3438ZM0.90625 15.3438H1.40625M0.90625 15.3438H1.40625M1.40625 15.3438H6.4737C6.53203 15.4224 6.60659 15.5196 6.69752 15.63C6.93366 15.9166 7.2802 16.2918 7.74415 16.6652C8.67479 17.4141 10.0804 18.1562 12 18.1562C13.9641 18.1562 15.8444 17.2952 17.1319 15.8309L17.3822 15.5461L17.1756 15.2282L13.9703 10.2975L13.6382 9.78651M1.40625 15.3438L13.6382 9.78651M13.6382 9.78651L13.2019 10.2121M13.6382 9.78651L13.2019 10.2121M13.2019 10.2121C12.6178 10.7819 11.8584 11.0677 11.097 11.0678L13.2019 10.2121ZM17.5805 8.13096L17.7305 8.3125H17.966H23C23.2761 8.3125 23.5 8.53636 23.5 8.8125V15.25C23.5 15.5261 23.2761 15.75 23 15.75H17.966H17.7305L17.5805 15.9315C16.2149 17.5845 14.1521 18.5625 12 18.5625C9.84792 18.5625 7.78509 17.5845 6.41945 15.9315L6.26947 15.75H6.03398H1C0.723858 15.75 0.5 15.5261 0.5 15.25V8.8125C0.5 8.53636 0.723858 8.3125 1 8.3125H6.03398H6.26947L6.41945 8.13096C7.78509 6.47799 9.84792 5.5 12 5.5C14.1521 5.5 16.2149 6.47799 17.5805 8.13096ZM22.5938 15.3438H23.0938V14.8438V9.2187V8.7187H22.5938H17.5237C17.4859 8.66784 17.4412 8.60864 17.3895 8.54306C17.2197 8.32727 16.9763 8.04328 16.6518 7.74145C16.0025 7.1374 15.0272 6.46081 13.6677 6.11581L13.3921 6.04589L13.1911 6.2469L9.8343 9.60376L9.33382 10.1043L9.9728 10.4087C10.9416 10.8703 12.1393 10.7018 12.9422 9.89888C12.9422 9.89888 12.9422 9.89887 12.9422 9.89887L13.6683 9.17277L14.8062 10.3108L14.8063 10.3108C15.2984 10.8029 15.9552 11.075 16.6514 11.075C17.0515 11.075 17.4399 10.9851 17.7922 10.8136C17.9011 10.7606 18.0156 10.7372 18.1095 10.7419C18.1994 10.7464 18.253 10.7745 18.2865 10.808C18.3283 10.8498 18.3427 10.8989 18.3417 10.9326C18.3412 10.9483 18.3376 10.9579 18.335 10.9629C18.3329 10.9668 18.3289 10.9729 18.3173 10.9806L18.5945 11.3968L18.3173 10.9806C17.8287 11.306 17.2549 11.4813 16.6514 11.4813C16.497 11.4813 16.3444 11.4696 16.1945 11.447L15.0943 11.2811L15.7007 12.2139L17.5874 15.1163L17.7352 15.3438H18.0066H22.5938Z" stroke="#00AD8C"/>
            </svg>
            <p>Notas fiscais</p>
          </div>
        </div>
      </div>
      <div className={Styles.main}>
        <div className={Styles.mainHeader} />
        <div className={Styles.content}>
          <div className={Styles.contentHeading}>
              <div className={Styles.headingItem}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.90625 15.3438V14.8438V9.21875V8.71875H1.40625H6.47398C6.52872 8.64488 6.59785 8.55442 6.68146 8.45205C6.90594 8.17721 7.23453 7.81684 7.67478 7.45398C8.55749 6.72645 9.8916 5.98786 11.7237 5.91258L13.0035 5.85999L12.0978 6.76571L8.96465 9.8989C8.88532 9.97823 8.88532 10.1069 8.96465 10.1862C9.55227 10.7738 10.3233 11.0678 11.0969 11.0678L0.90625 15.3438ZM0.90625 15.3438H1.40625M0.90625 15.3438H1.40625M1.40625 15.3438H6.4737C6.53203 15.4224 6.60659 15.5196 6.69752 15.63C6.93366 15.9166 7.2802 16.2918 7.74415 16.6652C8.67479 17.4141 10.0804 18.1562 12 18.1562C13.9641 18.1562 15.8444 17.2952 17.1319 15.8309L17.3822 15.5461L17.1756 15.2282L13.9703 10.2975L13.6382 9.78651M1.40625 15.3438L13.6382 9.78651M13.6382 9.78651L13.2019 10.2121M13.6382 9.78651L13.2019 10.2121M13.2019 10.2121C12.6178 10.7819 11.8584 11.0677 11.097 11.0678L13.2019 10.2121ZM17.5805 8.13096L17.7305 8.3125H17.966H23C23.2761 8.3125 23.5 8.53636 23.5 8.8125V15.25C23.5 15.5261 23.2761 15.75 23 15.75H17.966H17.7305L17.5805 15.9315C16.2149 17.5845 14.1521 18.5625 12 18.5625C9.84792 18.5625 7.78509 17.5845 6.41945 15.9315L6.26947 15.75H6.03398H1C0.723858 15.75 0.5 15.5261 0.5 15.25V8.8125C0.5 8.53636 0.723858 8.3125 1 8.3125H6.03398H6.26947L6.41945 8.13096C7.78509 6.47799 9.84792 5.5 12 5.5C14.1521 5.5 16.2149 6.47799 17.5805 8.13096ZM22.5938 15.3438H23.0938V14.8438V9.2187V8.7187H22.5938H17.5237C17.4859 8.66784 17.4412 8.60864 17.3895 8.54306C17.2197 8.32727 16.9763 8.04328 16.6518 7.74145C16.0025 7.1374 15.0272 6.46081 13.6677 6.11581L13.3921 6.04589L13.1911 6.2469L9.8343 9.60376L9.33382 10.1043L9.9728 10.4087C10.9416 10.8703 12.1393 10.7018 12.9422 9.89888C12.9422 9.89888 12.9422 9.89887 12.9422 9.89887L13.6683 9.17277L14.8062 10.3108L14.8063 10.3108C15.2984 10.8029 15.9552 11.075 16.6514 11.075C17.0515 11.075 17.4399 10.9851 17.7922 10.8136C17.9011 10.7606 18.0156 10.7372 18.1095 10.7419C18.1994 10.7464 18.253 10.7745 18.2865 10.808C18.3283 10.8498 18.3427 10.8989 18.3417 10.9326C18.3412 10.9483 18.3376 10.9579 18.335 10.9629C18.3329 10.9668 18.3289 10.9729 18.3173 10.9806L18.5945 11.3968L18.3173 10.9806C17.8287 11.306 17.2549 11.4813 16.6514 11.4813C16.497 11.4813 16.3444 11.4696 16.1945 11.447L15.0943 11.2811L15.7007 12.2139L17.5874 15.1163L17.7352 15.3438H18.0066H22.5938Z"/>
                </svg>
                <p>Notas fiscais</p>
              </div>
              <p>Visualize as notas fiscais que você tem</p>
          </div>
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
        </div>
      </div>
    </div>
  )
}

export default Dashboard
