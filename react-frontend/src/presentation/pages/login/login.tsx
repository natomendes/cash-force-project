import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from './login-styles.scss'
import { Authentication } from '@/domain/usecases'
import { Validation } from '@/presentation/protocols'
import { FormContext, ApiContext } from '@/presentation/contexts'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import { initialState } from './login-initial-state'
import SubmitButton from '@/presentation/components/submit-button/submit-button'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const navigate = useNavigate()
  const { saveCurrentAccount } = useContext(ApiContext)
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const { email, password } = state
    const formData = { email, password }
    const emailError = validation.validate('email', formData)
    const passwordError = validation.validate('password', formData)

    setState({
      ...state,
      emailError,
      passwordError,
      isFormInvalid: !!emailError || !!passwordError
    })
  }, [state.email, state.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (!state.isLoading && !state.isFormInvalid) {
        setState({ ...state, isLoading: true })
        const account = await authentication.auth({ email: state.email, password: state.password })
        saveCurrentAccount(account)
        navigate('/', { replace: true })
      }
    } catch (error) {
      setState({ ...state, isLoading: false, errorMessage: error.message })
    }
  }

  return (
    <div className={Styles.login}>
      <LoginHeader />

      <FormContext.Provider value={{ state, setState }}>
        <form
          className={Styles.form}
          onSubmit={handleSubmit}
          role="form"
        >
          <h2>Login</h2>

          <Input
            type="email"
            name="email"
            placeholder='Digite seu e-mail'
          />
          <Input
            type="password"
            name="password"
            placeholder='Digite sua senha'
          />

          <SubmitButton text="Entrar" />

          <FormStatus />
        </form>
      </FormContext.Provider>

      <Footer />
    </div>
  )
}

export default Login
