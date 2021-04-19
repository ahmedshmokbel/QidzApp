
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from 'react-native';
import { useLoginStore } from "../MobX/StoreProvider";
import LoginScreen from '../screens/LoginScreen'
import MoviesScreen from '../screens/MoviesScreen'

import { observer } from 'mobx-react';



const AppContainer = () => {
    //state
    const loginContext = useLoginStore()
    const Container = observer(() => <NavigationContainer>

        {loginContext.isLoggedIn ?
            <MoviesScreen />
            :
            <LoginScreen />
        }
    </NavigationContainer >);

    return (

        <Container />

    )
}


export default (AppContainer)