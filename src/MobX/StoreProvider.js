import React, { createContext } from "react";
import { useLocalStore, } from "mobx-react";
import { createLoginStore } from "./LoginStore";

const LoginContext = createContext();

export const LoginStoreProvider = ({ children }) => {
    const loginStore = useLocalStore(createLoginStore)

    return (
        <LoginContext.Provider value={loginStore}>{children}</LoginContext.Provider>
    );
};
