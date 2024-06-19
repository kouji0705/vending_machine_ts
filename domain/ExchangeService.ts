import { Cash } from './Cash';
import { ExchangeMachineRepository } from './ExchangeMachineRepository';

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

export { ExchangeService };
