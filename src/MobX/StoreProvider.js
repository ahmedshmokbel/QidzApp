import React, { createContext, useContext } from "react";
import { useLocalObservable, } from "mobx-react";
import { createLoginStore } from "./LoginStore";

const LoginContext = createContext();

export const LoginStoreProvider = ({ children }) => {
    const loginStore = useLocalObservable(createLoginStore)

    return (
        <LoginContext.Provider value={loginStore}>{children}</LoginContext.Provider>
    );
};


export const useLoginStore = () => useContext(LoginContext)