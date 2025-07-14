// Conta direcionada a Pessoas Politicamente Expostas 
// - Deputados, Vereadores, entre outros

import { DioAccount } from "./DioAccount"

export class PPEAccount extends DioAccount {
    
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number): void  => {
        if(this.getStatus()){
            const newBalance = this.getBalance() + value + 10
            this.setBalance(newBalance)
            console.log("Seu deposito foi realizado!")
          } else {
            console.log("Sua conta não está liberada para essa solicitação.")
          }
    } 
}