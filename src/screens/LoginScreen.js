import React, { useState } from 'react';
import { TextInput, View, Button } from 'react-native';
import { useLoginStore } from '../MobX/StoreProvider';

const LoginScreen = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginContext = useLoginStore()
    const _login = () => {
        if (username === 'ivaldi' && password === 'testtest') {
            loginContext.login()
        } else {
            alert('wrong data')
        }

    }

    return (
        <View>
            <TextInput value={username} placeholder='username' onChangeText={(name) => setUsername(name)} />
            <TextInput value={password} placeholder='password' onChangeText={(password) => setPassword(password)} />
            <Button title='submit' onPress={() => _login()} />
        </View>
    );
}
export default LoginScreen;
