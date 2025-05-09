import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store';
import Home from './screens/Home';
import Lab1 from './screens/Lab1';
import Lab2 from './screens/Lab2';
import Lab3 from './screens/Lab3';
import Lab4 from './screens/Lab4';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ title: 'Главная' }} />
          <Stack.Screen name="Lab1" component={Lab1} options={{ title: 'Лабораторная 1' }} />
          <Stack.Screen name="Lab2" component={Lab2} options={{ title: 'Лабораторная 2' }} />
          <Stack.Screen name="Lab3" component={Lab3} options={{ title: 'Лабораторная 3' }} />
          <Stack.Screen name="Lab4" component={Lab4} options={{ title: 'Лабораторная 4' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;