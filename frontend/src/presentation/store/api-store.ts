import { AccountModel } from '@/domain/models'
import { setCurrentAccountAdapter, getCurrentAccountAdapter, clearCurrentAccountAdapter } from '@/main/adapters/current-token-adapter'
import { reactive } from 'vue'

export type ApiStoreType = {
  saveCurrentAccount?: (account: AccountModel) => void
  loadCurrentAccount?: () => AccountModel
  clearCurrentAccount?: () => void
}

export const apiStore = reactive<ApiStoreType>({
  saveCurrentAccount: setCurrentAccountAdapter,
  loadCurrentAccount: getCurrentAccountAdapter,
  clearCurrentAccount: clearCurrentAccountAdapter
})
