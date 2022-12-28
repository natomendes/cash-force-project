export class UnexpectedError extends Error {
  constructor () {
    super('Algo inesperado aconteceu, tente novamente')
    this.name = 'UnexpectedError'
  }
}
