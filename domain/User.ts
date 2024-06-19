class User {
    private username: string;
    private password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    getUsername(): string {
        return this.username;
    }

    verifyPassword(password: string): boolean {
        return this.password === password;
    }
}

export { User };
