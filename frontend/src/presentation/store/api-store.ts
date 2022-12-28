import { AccountModel } from '@/domain/models'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters/current-token-adapter'
import { reactive } from 'vue'

export type ApiStoreType = {
  saveCurrentAccount?: (account: AccountModel) => void
  loadCurrentAccount?: () => AccountModel
}

export const apiStore = reactive<ApiStoreType>({
  saveCurrentAccount: setCurrentAccountAdapter,
  loadCurrentAccount: getCurrentAccountAdapter
})
