import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <TouchableOpacity
      style={[styles.button, isDarkMode ? styles.darkButton : styles.lightButton]}
      onPress={toggleTheme}
    >
      <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
        {isDarkMode ? 'Светлая тема' : 'Темная тема'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  lightButton: {
    backgroundColor: '#f0f0f0',
  },
  darkButton: {
    backgroundColor: '#333',
  },
  text: {
    fontSize: 16,
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});

export default ThemeToggle; 