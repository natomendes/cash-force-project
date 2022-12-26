import { GetStorage, SetStorage } from '@/data/protocols/cache'

export class LocalStorageAdapter implements SetStorage, GetStorage {
  set (key: string, value: any): void {
    localStorage.setItem(key, value)
  }

  get (key: string): any {
    return localStorage.getItem(key)
  }
}
