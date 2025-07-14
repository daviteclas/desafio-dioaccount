import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value : number): void => {
    if (this.getStatus()) {
      const newBalance = this.getBalance() + value
      this.setBalance(newBalance)
      console.log("Seu emprestimo foi realizado!")
    } else {
      console.log("Sua conta não está liberada para essa solicitação.")
    }
  }
}
