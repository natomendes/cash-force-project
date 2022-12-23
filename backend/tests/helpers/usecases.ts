import { Decrypter } from '@/data/protocols/decrypter'
import { LoadUserByIdRepo } from '@/data/protocols/load-user-by-id-repo'
import { LoadUserOrdersRepo } from '@/data/protocols/load-user-order-repo'
import { OrderModel } from '@/domain/models/order'
import { UserModel } from '@/domain/models/user'
import { LoadUserByToken } from '@/domain/usecases/load-user-by-token'
import { LoadUserOrders } from '@/domain/usecases/load-user-orders'
import { mockOrderModelList, mockUserModel } from '@/tests/helpers/models'

export const mockLoadUserOrders = (): LoadUserOrders => {
  class LoadUserOrdersStub implements LoadUserOrders {
    async load (_userId: string): Promise<OrderModel[]> {
      return mockOrderModelList()
    }
  }
  return new LoadUserOrdersStub()
}

export const mockLoadUserOrdersRepo = (): LoadUserOrdersRepo => {
  class LoadUserOrdersRepoStub implements LoadUserOrdersRepo {
    async loadByUserId (_userId: string): Promise<OrderModel[]> {
      return mockOrderModelList()
    }
  }
  return new LoadUserOrdersRepoStub()
}

export const mockDecrypter = (): Decrypter => {
  class DecrypterStub implements Decrypter {
    async decrypt (_token: string): Promise<number> {
      return 1
    }
  }
  return new DecrypterStub()
}

export const mockLoadUserByIdRepo = (): LoadUserByIdRepo => {
  class LoadUserByIdRepoStub implements LoadUserByIdRepo {
    async loadById (_suserId: number): Promise<UserModel> {
      return mockUserModel()
    }
  }
  return new LoadUserByIdRepoStub()
}

export const mockLoadUserByToken = (): LoadUserByToken => {
  class LoadUserByTokenStub implements LoadUserByToken {
    async load (_token: string): Promise<UserModel> {
      return mockUserModel()
    }
  }
  return new LoadUserByTokenStub()
}
