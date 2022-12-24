export type AuthParams = {
  email: string
  password: string
}

export interface Authentication {
  auth (authParam: AuthParams): Promise<string>
}
