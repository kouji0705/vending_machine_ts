import { Cash } from './domain/Cash';
import { BankAccount } from './domain/BankAccount';
import { BankAccountService } from './domain/BankAccountService';
import { InMemoryBankAccountRepository } from './infra/InMemoryBankAccountRepository';

// リポジトリの具体的な実装を作成
const repository = new InMemoryBankAccountRepository();

// 銀行口座を初期化してリポジトリに保存
const bankAccount = new BankAccount();
repository.save(bankAccount);

// サービスを初期化
const bankAccountService = new BankAccountService(repository);

// 銀行口座IDを設定（サンプル用に固定のIDを使用）
const bankAccountId = "default";

// 現金を預金
console.log('Depositing 100...');
bankAccountService.deposit(bankAccountId, 100 as Cash);
console.log('Depositing 500...');
bankAccountService.deposit(bankAccountId, 500 as Cash);

// 現金を出金
try {
    console.log('Withdrawing 100...');
    bankAccountService.withdraw(bankAccountId, 100 as Cash);
    console.log('Withdrawing 50...');
    bankAccountService.withdraw(bankAccountId, 50 as Cash);
} catch (error) {
    console.error(error);
}

// 残高の確認
try {
    const balance = bankAccountService.getBalance(bankAccountId);
    console.log(`Current balance: ${balance}`); // 現在の残高を表示
} catch (error) {
    console.error(error);
}
