import z from "zod";

// 値オブジェクト
export const Cash = z.union([
    z.literal(10),
    z.literal(50),
    z.literal(100),
    z.literal(500),
    z.literal(1000),
]).brand<"Cash">();
export type Cash = z.infer<typeof Cash>;

// 両替機エンティティ
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
}

// リポジトリ
interface ExchangeMachineRepository {
    save(exchangeMachine: ExchangeMachine): void;
    find(id: string): ExchangeMachine | null;
}

// ドメインサービス
class ExchangeService {
    private repository: ExchangeMachineRepository;

    constructor(repository: ExchangeMachineRepository) {
        this.repository = repository;
    }

    deposit(exchangeMachineId: string, cash: Cash): void {
        const exchangeMachine = this.repository.find(exchangeMachineId);
        if (exchangeMachine) {
            exchangeMachine.deposit(cash);
            this.repository.save(exchangeMachine);
        } else {
            throw new Error("Exchange machine not found");
        }
    }

    exchange(exchangeMachineId: string, cash: Cash): Cash {
        const exchangeMachine = this.repository.find(exchangeMachineId);
        if (exchangeMachine) {
            const exchangedCash = exchangeMachine.exchange(cash);
            this.repository.save(exchangeMachine);
            return exchangedCash;
        } else {
            throw new Error("Exchange machine not found");
        }
    }
}

export { ExchangeMachine, ExchangeService, ExchangeMachineRepository };
