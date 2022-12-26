import React, { useContext } from 'react'
import { FormContext } from '@/presentation/contexts'
import Spinner from '@/presentation/components/spinner/spinner'

type Props = {
  text: string
}

const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  const { state } = useContext(FormContext)
  return (
    <button
      type="submit"
      disabled={state.isFormInvalid}
    >
      { state.isLoading ? <Spinner /> : text }
    </button>
  )
}

export default SubmitButton
