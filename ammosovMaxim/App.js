import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';
import { loadTheme } from './store/themeSlice';
import Lab4 from './screens/Lab4';

const AppContent = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const containerStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#1a1a1a' : '#fff',
  };

  useEffect(() => {
    store.dispatch(loadTheme());
  }, []);

  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.container}>
        <Lab4 />
      </View>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App; 