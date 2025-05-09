import React, { useState, useMemo } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Функция для вычисления факториала (тяжёлая вычислительная задача)
const calculateFactorial = (n) => {
  let result = 1n; // Используем BigInt для больших чисел
  for (let i = 1n; i <= n; i++) {
    result *= i;
  }
  return result.toString(); // Возвращаем как строку для отображения
};

const Lab3 = () => {
  const [inputNumber, setInputNumber] = useState('20'); // Входное число для факториала
  const [trigger, setTrigger] = useState(0); // Состояние для принудительного рендера
  const navigation = useNavigation();

  // Без useMemo: вычисление при каждом рендере
  const startTimeWithoutMemo = performance.now();
  const resultWithoutMemo = calculateFactorial(BigInt(inputNumber || 0));
  const timeWithoutMemo = (performance.now() - startTimeWithoutMemo).toFixed(2);

  // С useMemo: кэширование результата
  const startTimeWithMemo = performance.now();
  const resultWithMemo = useMemo(() => {
    return calculateFactorial(BigInt(inputNumber || 0));
  }, [inputNumber]);
  const timeWithMemo = (performance.now() - startTimeWithMemo).toFixed(2);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Демонстрация useMemo (Lab3)</Text>
      
      {/* Ввод числа */}
      <Text style={styles.label}>Введите число для вычисления факториала:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inputNumber}
        onChangeText={setInputNumber}
        placeholder="Введите число (например, 20)"
      />

      {/* Без useMemo */}
      <View style={styles.resultContainer}>
        <Text style={styles.subTitle}>Без useMemo:</Text>
        <Text style={styles.result}>
          Факториал: {resultWithoutMemo.slice(0, 20)}...
        </Text>
        <Text style={styles.time}>Время: {timeWithoutMemo} мс</Text>
        {timeWithoutMemo > 10 && <ActivityIndicator size="small" color="#ff0000" />}
      </View>

      {/* С useMemo */}
      <View style={styles.resultContainer}>
        <Text style={styles.subTitle}>С useMemo:</Text>
        <Text style={styles.result}>
          Факториал: {resultWithMemo.slice(0, 20)}...
        </Text>
        <Text style={styles.time}>Время: {timeWithMemo} мс</Text>
        {timeWithMemo > 10 && <ActivityIndicator size="small" color="#ff0000" />}
      </View>

      {/* Кнопка для принудительного рендера */}
      <View style={styles.buttonContainer}>
        <Button
          title="Обновить (триггер рендера)"
          onPress={() => setTrigger(trigger + 1)}
        />
      </View>

      {/* Навигация */}
      <View style={styles.navigationButton}>
        <Button title="Назад" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

export default Lab3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
  },
  resultContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  result: {
    fontSize: 16,
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    color: '#555',
  },
  buttonContainer: {
    marginVertical: 10,
  },
  navigationButton: {
    marginTop: 10,
  },
});