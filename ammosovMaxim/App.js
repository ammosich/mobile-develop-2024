import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { loadTheme } from './store/themeSlice';
import Lab4 from './screens/Lab4';

const App = () => {
  useEffect(() => {
    store.dispatch(loadTheme());
  }, []);

  return (
    <Provider store={store}>
      <Lab4 />
    </Provider>
  );
};

export default App; 