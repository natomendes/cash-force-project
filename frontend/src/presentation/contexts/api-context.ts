import { createContext } from 'react'

type Props = {
  saveAccessToken?: (accessToken: string) => void
  getAccessToken?: () => string
}

export default createContext<Props>(null)
