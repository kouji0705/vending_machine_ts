import { Cash } from './Cash';
import { BankAccountRepository } from './BankAccountRepository';
import { AuthService } from './AuthService';

class BankAccountService {
    private repository: BankAccountRepository;
    private authService: AuthService;

    constructor(repository: BankAccountRepository, authService: AuthService) {
        this.repository = repository;
        this.authService = authService;
    }

    private authenticate(username: string, password: string): void {
        if (!this.authService.authenticate(username, password)) {
            throw new Error("Authentication failed");
        }
    }

    deposit(accountId: string, cash: Cash, username: string, password: string): void {
        this.authenticate(username, password);
        const account = this.repository.find(accountId);
        if (account) {
            account.deposit(cash);
            this.repository.save(account);
        } else {
            throw new Error("Bank account not found");
        }
    }

    withdraw(accountId: string, cash: Cash, username: string, password: string): void {
        this.authenticate(username, password);
        const account = this.repository.find(accountId);
        if (account) {
            account.withdraw(cash);
            this.repository.save(account);
        } else {
            throw new Error("Bank account not found");
        }
    }

    getBalance(accountId: string, username: string, password: string): number {
        this.authenticate(username, password);
        const account = this.repository.find(accountId);
        if (account) {
            return account.getBalance();
        } else {
            throw new Error("Bank account not found");
        }
    }
}

export { BankAccountService };
