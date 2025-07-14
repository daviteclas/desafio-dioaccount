export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  getStatus = ():boolean => {
    return this.status
  }

  deposit = (value : number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log("Seu deposito foi realizado!")
    } else {
      console.log("Sua conta não está liberada para essa solicitação.")
    }
  }

  withdraw = (value : number): void => {
    if (this.validateStatus()) {
      if (value <= this.balance) {
        this.balance -= value
        console.log("Seu saque foi realizado!")
      } else {
        console.log("Você não possui saldo para sacar.")
      }
    } else {
      console.log("Sua conta não está liberada para essa solicitação.")
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (value:number) :void => {
    this.balance = value
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
