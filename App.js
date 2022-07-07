
import 'react-native-reanimated'
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home';
import { Login } from './src/pages/Login';
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
      </Stack.Navigator>

    </NavigationContainer>
  );
}

