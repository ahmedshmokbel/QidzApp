import React, { createContext, useContext } from "react";
import { useLocalObservable, useLocalStore, } from "mobx-react";
import { createLoginStore } from "./LoginStore";
import { observable } from "mobx";

const LoginContext = createContext();

export const LoginStoreProvider = ({ children }) => {

    const loginStore = useLocalObservable(createLoginStore)
   
    return (
        <LoginContext.Provider value={loginStore}>{children}</LoginContext.Provider>
    );
};


export const useLoginStore = () => useContext(LoginContext)