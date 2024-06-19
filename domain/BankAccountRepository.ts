import { BankAccount } from './BankAccount';

interface BankAccountRepository {
    save(bankAccount: BankAccount): void;
    find(id: string): BankAccount | null;
}

export { BankAccountRepository };
