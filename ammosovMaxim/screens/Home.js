import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { themes } from '../themes';

const Home = () => {
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

  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim, backgroundColor: theme.background }]}>
      <Text style={[styles.header, { color: theme.headerText }]}>Лабораторные</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonBackground, borderColor: theme.buttonBorder, shadowColor: theme.buttonShadow }]} onPress={() => handlePress('Lab1')}>
        <Text style={[styles.buttonText, { color: theme.labelText }]}>Лабораторная 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonBackground, borderColor: theme.buttonBorder, shadowColor: theme.buttonShadow }]} onPress={() => handlePress('Lab2')}>
        <Text style={[styles.buttonText, { color: theme.labelText }]}>Лабораторная 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonBackground, borderColor: theme.buttonBorder, shadowColor: theme.buttonShadow }]} onPress={() => handlePress('Lab3')}>
        <Text style={[styles.buttonText, { color: theme.labelText }]}>Лабораторная 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonBackground, borderColor: theme.buttonBorder, shadowColor: theme.buttonShadow }]} onPress={() => handlePress('Lab4')}>
        <Text style={[styles.buttonText, { color: theme.labelText }]}>Лабораторная 4</Text>
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
  header: {
    fontFamily: 'Roboto Mono',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: '#00D4FF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    borderWidth: 1,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  buttonText: {
    fontFamily: 'Roboto Mono',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

export default Home;