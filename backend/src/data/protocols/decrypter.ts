export interface Decrypter {
  decrypt (_token: string): Promise<string>
}
