import { Cash } from './Cash';

class ExchangeMachine {
    private balance: Cash[];

    constructor() {
        this.balance = [];
    }

    deposit(cash: Cash): void {
        this.balance.push(cash);
    }

    exchange(cash: Cash): Cash {
        const totalBalance = this.balance.reduce((acc, curr) => acc + curr, 0);

        if (totalBalance < cash) {
            throw new Error("Insufficient balance for exchange");
        }

        this.balance = this.balance.filter(b => b !== cash);
        return cash;
    }

    getBalance(): Cash[] {
        return this.balance;
    }
}

export { ExchangeMachine };
