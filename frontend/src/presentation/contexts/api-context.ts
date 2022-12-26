import { createContext } from 'react'

type Props = {
  saveAccessToken?: (accessToken: string) => void
}

export default createContext<Props>(null)
