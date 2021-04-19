export function createLoginStore() {

    return {
        isLoggedIn: false,
        login() {
            this.isLoggedIn = true;
        },
        logout() {
            this.isLoggedIn = false;
        }
    }
}