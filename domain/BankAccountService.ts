import { Cash } from './Cash';
import { BankAccountRepository } from './BankAccountRepository';

class BankAccountService {
    private repository: BankAccountRepository;

    constructor(repository: BankAccountRepository) {
        this.repository = repository;
    }

    deposit(accountId: string, cash: Cash): void {
        const account = this.repository.find(accountId);
        if (account) {
            account.deposit(cash);
            this.repository.save(account);
        } else {
            throw new Error("Bank account not found");
        }
    }

    withdraw(accountId: string, cash: Cash): void {
        const account = this.repository.find(accountId);
        if (account) {
            account.withdraw(cash);
            this.repository.save(account);
        } else {
            throw new Error("Bank account not found");
        }
    }

    getBalance(accountId: string): number {
        const account = this.repository.find(accountId);
        if (account) {
            return account.getBalance();
        } else {
            throw new Error("Bank account not found");
        }
    }
}

export { BankAccountService };
