import { UserRepository } from './UserRepository';

class AuthService {
    private repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    authenticate(username: string, password: string): boolean {
        const user = this.repository.find(username);
        return user !== null && user.verifyPassword(password);
    }
}

export { AuthService };
