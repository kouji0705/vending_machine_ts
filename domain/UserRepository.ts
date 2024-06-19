import { User } from './User';

interface UserRepository {
    save(user: User): void;
    find(username: string): User | null;
}

export { UserRepository };
