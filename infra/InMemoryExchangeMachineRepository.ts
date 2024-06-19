import { ExchangeMachine } from '../domain/ExchangeMachine';
import { ExchangeMachineRepository } from '../domain/ExchangeMachineRepository';

class InMemoryExchangeMachineRepository implements ExchangeMachineRepository {
    private storage: Map<string, ExchangeMachine>;

    constructor() {
        this.storage = new Map();
    }

    save(exchangeMachine: ExchangeMachine): void {
        this.storage.set("default", exchangeMachine); // サンプル用に固定のIDを使用
    }

    find(id: string): ExchangeMachine | null {
        return this.storage.get(id) || null;
    }
}

export { InMemoryExchangeMachineRepository };
