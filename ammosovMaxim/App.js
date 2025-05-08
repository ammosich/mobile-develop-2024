import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lab1 from './screens/Lab1';
import Lab2 from './screens/Lab2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lab1">
        <Stack.Screen name="Lab1" component={Lab1} options={{ title: 'Лабораторная 1' }} />
        <Stack.Screen name="Lab2" component={Lab2} options={{ title: 'Лабораторная 2' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;