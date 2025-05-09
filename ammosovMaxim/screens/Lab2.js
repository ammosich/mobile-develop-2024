import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Lab2 = () => {
  const [count, setCount] = useState(0);
  const navigation = useNavigation();
  
  useEffect(() => {
    console.log('Компонент Lab2 загружен');
    return () => {
      console.log('Компонент Lab2 размонтирован');
    };
  }, []);
  
  useEffect(() => {
    console.log(`Значение счётчика изменилось: ${count}`);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Демонстрация useEffect (Lab2)</Text>
      <Text style={styles.counter}>Счётчик: {count}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Увеличить" onPress={() => setCount(count + 1)} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button title="Сбросить" onPress={() => setCount(0)} />
        </View>
      </View>
      <View style={styles.navigationButton}>
        <Button title="Перейти к Lab1" onPress={() => navigation.navigate('Lab1')} />
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
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 32,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  buttonWrapper: {
    marginHorizontal: 5,
  },
  navigationButton: {
    marginTop: 10,
    width: '60%',
  },
});
