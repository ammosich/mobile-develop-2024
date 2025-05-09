import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Lab2 = () => {
  const [text, setText] = useState(''); // Введённый текст
  const [charCount, setCharCount] = useState(0); // Количество символов
  const navigation = useNavigation();

  // useEffect для подсчёта символов при изменении текста
  useEffect(() => {
    setCharCount(text.length);
  }, [text]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useEffect Демонстрация (Lab2)</Text>
      <Text style={styles.label}>Введите текст:</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Начните печатать..."
      />
      <Text style={styles.result}>Количество символов: {charCount}</Text>
      <View style={styles.navigationButton}>
        <Button title="Перейти к Lab1" onPress={() => navigation.navigate('Lab1')} />
        <Button title="Перейти к Lab3" onPress={() => navigation.navigate('Lab3')} />
      </View>
    </View>
  );
};

export default Lab2;

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
  result: {
    fontSize: 20,
    marginBottom: 20,
  },
  navigationButton: {
    marginTop: 10,
    gap: 10,
  },
});