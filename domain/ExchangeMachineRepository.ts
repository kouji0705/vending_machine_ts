import { ExchangeMachine } from './ExchangeMachine';

interface ExchangeMachineRepository {
    save(exchangeMachine: ExchangeMachine): void;
    find(id: string): ExchangeMachine | null;
}

export { ExchangeMachineRepository };
