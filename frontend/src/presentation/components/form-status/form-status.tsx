import React, { useContext } from 'react'
import Styles from './form-status-styles.scss'
import { FormContext } from '@/presentation/contexts'

type Props = React.HTMLAttributes<HTMLElement>

const FormStatus: React.FC<Props> = (props: Props) => {
  const { state: { errorMessage } } = useContext(FormContext)
  return (
    <div className={Styles.errorWrap}>
    { errorMessage && <span className={Styles.error} data-testid="error-message-span">{ errorMessage }</span> }
  </div>
  )
}

export default FormStatus
