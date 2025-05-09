import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Lab2 = () => {
  const [text, setText] = useState(''); // Введённый текст
  const [charCount, setCharCount] = useState(0); // Количество символов
  const navigation = useNavigation();
  const isDark = useSelector((state) => state.theme.isDark); // Получаем состояние темы

  // useEffect для подсчёта символов при изменении текста
  useEffect(() => {
    setCharCount(text.length);
  }, [text]);

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>useEffect Демонстрация (Lab2)</Text>
      <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Введите текст:</Text>
      <TextInput
        style={[styles.input, { backgroundColor: isDark ? '#555' : '#fff', color: isDark ? '#fff' : '#000' }]}
        value={text}
        onChangeText={setText}
        placeholder="Начните печатать..."
        placeholderTextColor={isDark ? '#aaa' : '#666'}
      />
      <Text style={[styles.result, { color: isDark ? '#fff' : '#000' }]}>Количество символов: {charCount}</Text>
      <View style={styles.navigationButton}>
        <Button title="Назад" onPress={() => navigation.navigate('Home')} />
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