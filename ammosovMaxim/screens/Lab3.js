import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

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
    <Animated.View style={[styles.container, { opacity: fadeAnim, backgroundColor: isDark ? '#0D0D0D' : '#1A1A1A' }]}>
      <Text style={[styles.title, { color: isDark ? '#FFFFFF' : '#E0E0E0' }]}>useMemo: Факториал</Text>
      <Text style={[styles.label, { color: '#E0E0E0' }]}>Число:</Text>
      <TextInput
        style={[styles.input, { backgroundColor: isDark ? '#2C2C2C' : '#333', color: '#E0E0E0', borderColor: isDark ? '#FF2E63' : '#00D4FF' }]}
        keyboardType="numeric"
        value={inputNumber}
        onChangeText={setInputNumber}
        placeholder="Введите число"
        placeholderTextColor="#666"
      />
      <View style={styles.resultContainer}>
        <Text style={[styles.subTitle, { color: '#E0E0E0' }]}>Без useMemo:</Text>
        <Text style={[styles.result, { color: '#00D4FF' }]}>Факториал: {resultWithoutMemo.slice(0, 20)}...</Text>
        <Text style={[styles.time, { color: '#E0E0E0' }]}>Время: {timeWithoutMemo} мс</Text>
        {timeWithoutMemo > 10 && <ActivityIndicator size="small" color="#FF2E63" />}
      </View>
      <View style={styles.resultContainer}>
        <Text style={[styles.subTitle, { color: '#E0E0E0' }]}>С useMemo:</Text>
        <Text style={[styles.result, { color: '#00D4FF' }]}>Факториал: {resultWithMemo.slice(0, 20)}...</Text>
        <Text style={[styles.time, { color: '#E0E0E0' }]}>Время: {timeWithMemo} мс</Text>
        {timeWithMemo > 10 && <ActivityIndicator size="small" color="#FF2E63" />}
      </View>
      <TouchableOpacity style={[styles.button, { borderColor: '#00D4FF' }]} onPress={() => setTrigger(trigger + 1)}>
        <Text style={styles.buttonText}>Обновить</Text>
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

export default Lab3;