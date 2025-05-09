import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { themes } from '../themes';

const Lab1 = () => {
  const [count, setCount] = useState(0);
  const navigation = useNavigation();
  const isDark = useSelector((state) => state.theme.isDark);
  const theme = isDark ? themes.dark : themes.light;
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim, backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.headerText }]}>useState: Счётчик</Text>
      <Text style={[styles.counter, { color: theme.resultText }]}>{count}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonBackground, borderColor: theme.buttonBorder, shadowColor: theme.buttonShadow }]} onPress={() => setCount(count + 1)}>
          <Text style={[styles.buttonText, { color: theme.labelText }]}>Увеличить</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonBackground, borderColor: theme.backButtonBorder, shadowColor: theme.backButtonShadow }]} onPress={() => setCount(0)}>
          <Text style={[styles.buttonText, { color: theme.labelText }]}>Сбросить</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.backButton, { backgroundColor: theme.buttonBackground, borderColor: theme.backButtonBorder, shadowColor: theme.backButtonShadow }]} onPress={() => navigation.navigate('Home')}>
        <Text style={[styles.buttonText, { color: theme.labelText }]}>Назад</Text>
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
  counter: {
    fontFamily: 'Roboto Mono',
    fontSize: 48,
    marginBottom: 40,
    textShadowColor: '#00D4FF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 30,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  buttonText: {
    fontFamily: 'Roboto Mono',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

export default Lab1;