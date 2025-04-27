import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      AsyncStorage.setItem('theme', JSON.stringify(state.isDarkMode));
    },
    setTheme: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export const loadTheme = () => async (dispatch) => {
  try {
    const savedTheme = await AsyncStorage.getItem('theme');
    if (savedTheme !== null) {
      dispatch(setTheme(JSON.parse(savedTheme)));
    }
  } catch (error) {
    console.error('Ошибка загрузки темы:', error);
  }
};

export default themeSlice.reducer; 