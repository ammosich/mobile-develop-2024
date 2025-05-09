import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

const Lab4 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim, backgroundColor: isDark ? '#0D0D0D' : '#1A1A1A' }]}>
      <Text style={[styles.title, { color: isDark ? '#FFFFFF' : '#E0E0E0' }]}>Redux: Тема</Text>
      <Text style={[styles.label, { color: '#00D4FF' }]}>Тема: {isDark ? 'Мрачная' : 'Тёмная'}</Text>
      <TouchableOpacity style={[styles.button, { borderColor: '#00D4FF' }]} onPress={() => dispatch(toggleTheme())}>
        <Text style={styles.buttonText}>Переключить</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.backButton, { borderColor: '#FF2E63' }]} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Назад</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontFamily: 'Roboto Mono',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    textShadowColor: '#00D4FF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  label: {
    fontFamily: 'Roboto Mono',
    fontSize: 24,
    marginBottom: 40,
    textShadowColor: '#00D4FF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  button: {
    backgroundColor: '#2C2C2C',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 10,
    shadowColor: '#00D4FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  backButton: {
    backgroundColor: '#2C2C2C',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 10,
    shadowColor: '#FF2E63',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  buttonText: {
    fontFamily: 'Roboto Mono',
    fontSize: 16,
    color: '#E0E0E0',
    textTransform: 'uppercase',
  },
});

export default Lab4;