import { action, observable } from "mobx";
import { persist } from "mobx-persist";

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


 