/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import store from './store';
import Lab4 from './screens/Lab4';

const AppContent = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#fff',
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Lab4 />
    </SafeAreaView>
  );
};

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
