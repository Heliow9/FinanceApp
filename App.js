
import 'react-native-reanimated'
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home';
import { Login } from './src/pages/Login';
import { Register } from './src/pages/Login/register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import './database/index'
export default function App() {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    async function getCurrentUser() {
      const user = await AsyncStorage.getItem('userID')
      console.log(user);
    }
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Register" component={Register} options={{
          headerShown: false,
          headerLeft: null,
          gestureEnabled: false

        }} />
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false,
          gestureEnabled: false
        }} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

