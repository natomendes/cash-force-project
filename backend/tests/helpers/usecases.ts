import { Decrypter, HashComparer, LoadUserByEmailRepo, LoadUserByIdRepo, LoadUserOrdersRepo } from '@/data/protocols'
import { mockOrderModelList, mockUserModel } from '@/tests/helpers'
import { LoadUserByToken, LoadUserOrders } from '@/domain/usecases'
import { OrderModel, UserModel } from '@/domain/models'

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
    async loadById (_userId: number): Promise<UserModel> {
      return mockUserModel()
    }
  }
  return new LoadUserByIdRepoStub()
}

export const mockLoadUserByEmailRepo = (): LoadUserByEmailRepo => {
  class LoadUserByEmailRepoStub implements LoadUserByEmailRepo {
    async loadByEmail (_email: string): Promise<UserModel> {
      return mockUserModel()
    }
  }
  return new LoadUserByEmailRepoStub()
}

export const mockLoadUserByToken = (): LoadUserByToken => {
  class LoadUserByTokenStub implements LoadUserByToken {
    async load (_token: string): Promise<UserModel> {
      return mockUserModel()
    }
  }
  return new LoadUserByTokenStub()
}

export const mockHashComparer = (): HashComparer => {
  class HashComparerStub implements HashComparer {
    async compare (_value: string, _hash: string): Promise<boolean> {
      return true
    }
  }
  return new HashComparerStub()
}
