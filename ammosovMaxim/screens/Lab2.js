import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { themes } from '../themes';

const Lab2 = () => {
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);
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
    setCharCount(text.length);
  }, [text]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim, backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.headerText }]}>useEffect: Текст</Text>
      <Text style={[styles.label, { color: theme.labelText }]}>Введите текст:</Text>
      <TextInput
        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.inputText, borderColor: theme.inputBorder }]}
        value={text}
        onChangeText={setText}
        placeholder="Начните печатать..."
        placeholderTextColor={theme.inputPlaceholder}
      />
      <Text style={[styles.result, { color: theme.resultText }]}>Символов: {charCount}</Text>
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
  label: {
    fontFamily: 'Roboto Mono',
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    width: '80%',
    marginBottom: 30,
    borderRadius: 8,
    fontFamily: 'Roboto Mono',
    fontSize: 16,
    shadowColor: '#00D4FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  result: {
    fontFamily: 'Roboto Mono',
    fontSize: 24,
    marginBottom: 40,
    textShadowColor: '#00D4FF',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
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

export default Lab2;