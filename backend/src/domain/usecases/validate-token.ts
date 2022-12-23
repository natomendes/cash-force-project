export interface ValidateToken {
  validate (token: string): Promise<boolean>
}
