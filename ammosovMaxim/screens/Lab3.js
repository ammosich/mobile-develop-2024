import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { themes } from '../themes';

const calculateFactorial = (n) => {
  let result = 1n;
  for (let i = 1n; i <= n; i++) {
    result *= i;
  }
  return result.toString();
};

const Lab3 = () => {
  const [inputNumber, setInputNumber] = useState('20');
  const [trigger, setTrigger] = useState(0);
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

  const startTimeWithoutMemo = performance.now();
  const resultWithoutMemo = calculateFactorial(BigInt(inputNumber || 0));
  const timeWithoutMemo = (performance.now() - startTimeWithoutMemo).toFixed(2);

  const startTimeWithMemo = performance.now();
  const resultWithMemo = useMemo(() => calculateFactorial(BigInt(inputNumber || 0)), [inputNumber]);
  const timeWithMemo = (performance.now() - startTimeWithMemo).toFixed(2);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim, backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.headerText }]}>useMemo: Факториал</Text>
      <Text style={[styles.label, { color: theme.labelText }]}>Число:</Text>
      <TextInput
        style={[styles.input, { backgroundColor: theme.inputBackground, color: theme.inputText, borderColor: theme.inputBorder }]}
        keyboardType="numeric"
        value={inputNumber}
        onChangeText={setInputNumber}
        placeholder="Введите число"
        placeholderTextColor={theme.inputPlaceholder}
      />
      <View style={styles.resultContainer}>
        <Text style={[styles.subTitle, { color: theme.labelText }]}>Без useMemo:</Text>
        <Text style={[styles.result, { color: theme.resultText }]}>Факториал: {resultWithoutMemo.slice(0, 20)}...</Text>
        <Text style={[styles.time, { color: theme.labelText }]}>Время: {timeWithoutMemo} мс</Text>
        {timeWithoutMemo > 10 && <ActivityIndicator size="small" color={theme.indicator} />}
      </View>
      <View style={styles.resultContainer}>
        <Text style={[styles.subTitle, { color: theme.labelText }]}>С useMemo:</Text>
        <Text style={[styles.result, { color: theme.resultText }]}>Факториал: {resultWithMemo.slice(0, 20)}...</Text>
        <Text style={[styles.time, { color: theme.labelText }]}>Время: {timeWithMemo} мс</Text>
        {timeWithMemo > 10 && <ActivityIndicator size="small" color={theme.indicator} />}
      </View>
      <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonBackground, borderColor: theme.buttonBorder, shadowColor: theme.buttonShadow }]} onPress={() => setTrigger(trigger + 1)}>
        <Text style={[styles.buttonText, { color: theme.labelText }]}>Обновить</Text>
      </TouchableOpacity>
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
  resultContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  subTitle: {
    fontFamily: 'Roboto Mono',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  result: {
    fontFamily: 'Roboto Mono',
    fontSize: 16,
    marginBottom: 5,
  },
  time: {
    fontFamily: 'Roboto Mono',
    fontSize: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 10,
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

export default Lab3;