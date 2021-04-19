
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from 'react-native';
import { useLoginStore } from "../MobX/StoreProvider";
import LoginScreen from '../screens/LoginScreen'



const AppContainer = () => {
    //state
    const loginContext = useLoginStore()

     return (

        <NavigationContainer>

            {loginContext.isLoggedIn ?
                <View>
                    <Text>jdjdj</Text>
                </View>
                :
                <LoginScreen />
            }
        </NavigationContainer >

    )
}


export default (AppContainer)