import { Cash } from './Cash';

class BankAccount {
    private balance: number;

    constructor() {
        this.balance = 0;
    }

    deposit(cash: Cash): void {
        console.log(`Depositing cash: ${cash}`);
        this.balance += cash;
    }

    withdraw(cash: Cash): void {
        console.log(`Withdrawing cash: ${cash}`);
        if (this.balance < cash) {
            throw new Error("Insufficient balance for withdrawal");
        }
        this.balance -= cash;
    }

    getBalance(): number {
        return this.balance;
    }
}

export { BankAccount };
