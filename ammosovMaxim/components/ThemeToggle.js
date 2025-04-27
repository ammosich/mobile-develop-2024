import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  return (
    <TouchableOpacity
      style={[styles.button, isDarkMode ? styles.darkButton : styles.lightButton]}
      onPress={() => dispatch(toggleTheme())}
    >
      <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
        {isDarkMode ? 'Светлая тема' : 'Темная тема'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  lightButton: {
    backgroundColor: '#007AFF',
  },
  darkButton: {
    backgroundColor: '#5856D6',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  lightText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#FFFFFF',
  },
});

export default ThemeToggle; 