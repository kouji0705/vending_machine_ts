import { BankAccount } from '../domain/BankAccount';
import { BankAccountRepository } from '../domain/BankAccountRepository';

class InMemoryBankAccountRepository implements BankAccountRepository {
    private storage: Map<string, BankAccount>;

    constructor() {
        this.storage = new Map();
    }

    save(bankAccount: BankAccount): void {
        // サンプル用に固定のIDを使用
        this.storage.set("default", bankAccount);
    }

    find(id: string): BankAccount | null {
        return this.storage.get(id) || null;
    }
}

export { InMemoryBankAccountRepository };
