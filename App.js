import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigation/AppContainer';
import { LoginStoreProvider } from './src/MobX/StoreProvider'
export default function App() {
  return (
    <LoginStoreProvider>
      <AppContainer />
    </LoginStoreProvider>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
