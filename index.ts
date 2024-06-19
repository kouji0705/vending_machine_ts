import { Cash } from './domain/Cash';
import { BankAccount } from './domain/BankAccount';
import { BankAccountService } from './domain/BankAccountService';
import { InMemoryBankAccountRepository } from './infra/InMemoryBankAccountRepository';
import { User } from './domain/User';
import { InMemoryUserRepository } from './infra/InMemoryUserRepository';
import { AuthService } from './domain/AuthService';

// リポジトリの具体的な実装を作成
const bankAccountRepository = new InMemoryBankAccountRepository();
const userRepository = new InMemoryUserRepository();

// ユーザーを初期化してリポジトリに保存
const user = new User('koji', 'password');
userRepository.save(user);

// 認証サービスを初期化
const authService = new AuthService(userRepository);

// 銀行口座を初期化してリポジトリに保存
const bankAccount = new BankAccount();
bankAccountRepository.save(bankAccount);

// サービスを初期化
const bankAccountService = new BankAccountService(bankAccountRepository, authService);

// 銀行口座IDを設定（サンプル用に固定のIDを使用）
const bankAccountId = "default";
const username = 'koji';
const password = 'password';

// 現金を預金
console.log('Depositing 100...');
bankAccountService.deposit(bankAccountId, 100 as Cash, username, password);
console.log('Depositing 500...');
bankAccountService.deposit(bankAccountId, 500 as Cash, username, password);

// 現金を出金
try {
    console.log('Withdrawing 100...');
    bankAccountService.withdraw(bankAccountId, 100 as Cash, username, password);
    console.log('Withdrawing 50...');
    bankAccountService.withdraw(bankAccountId, 50 as Cash, username, password);
} catch (error) {
    console.error(error);
}

// 残高の確認
try {
    const balance = bankAccountService.getBalance(bankAccountId, username, password);
    console.log(`Current balance: ${balance}`); // 現在の残高を表示
} catch (error) {
    console.error(error);
}
