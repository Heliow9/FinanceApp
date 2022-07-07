
import 'react-native-reanimated'
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home';
import { Login } from './src/pages/Login';
import { Register } from './src/pages/Login/register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './database/index'
export default function App() {
  const Stack = createNativeStackNavigator();

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

