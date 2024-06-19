import { User } from '../domain/User';
import { UserRepository } from '../domain/UserRepository';

class InMemoryUserRepository implements UserRepository {
    private storage: Map<string, User>;

    constructor() {
        this.storage = new Map();
    }

    save(user: User): void {
        this.storage.set(user.getUsername(), user);
    }

    find(username: string): User | null {
        return this.storage.get(username) || null;
    }
}

export { InMemoryUserRepository };
