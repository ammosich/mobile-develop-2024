import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'; 
import Lab1 from './screens/Lab1';
import Lab2 from './screens/Lab2';
import Lab3 from './screens/Lab3';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Главная' }} />
        <Stack.Screen name="Lab1" component={Lab1} options={{ title: 'Лабораторная 1' }} />
        <Stack.Screen name="Lab2" component={Lab2} options={{ title: 'Лабораторная 2' }} />
        <Stack.Screen name="Lab3" component={Lab2} options={{ title: 'Лабораторная 3' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;