import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PPEAccount } from './class/PPEAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
console.log(peopleAccount.getBalance())
peopleAccount.withdraw(50)
console.log(peopleAccount.getBalance())

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount)
companyAccount.deposit(100)
console.log(companyAccount.getBalance())
companyAccount.withdraw(50)
console.log(companyAccount.getBalance())
companyAccount.getLoan(10000)
console.log(companyAccount.getBalance())

const ppe: PPEAccount = new PPEAccount('Lula', 30)
console.log(ppe)
ppe.deposit(100)
console.log(ppe.getBalance())
ppe.withdraw(50)
console.log(ppe.getBalance())