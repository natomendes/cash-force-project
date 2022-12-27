import { AccountModel } from '@/domain/models'
import { setCurrentAccountAdapter } from '@/main/adapters/current-token-adapter'

export type ApiContextType = {
  saveCurrentAccount?: (account: AccountModel) => void
}

export const ApiContext: ApiContextType = {
  saveCurrentAccount: setCurrentAccountAdapter
}
