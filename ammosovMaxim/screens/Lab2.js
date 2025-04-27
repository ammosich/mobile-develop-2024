import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Lab2 = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Initial message');

  // useEffect, выполняющийся при монтировании и каждом обновлении компонента
  useEffect(() => {
    console.log('Effect ran: Component mounted or updated');
    setMessage(`Count changed to: ${count}`);
    
    // Функция очистки (cleanup)
    return () => {
      console.log('Cleanup: Effect cleanup before next effect or unmount');
    };
  }, [count]); // Зависимость от count

  // useEffect, выполняющийся только при монтировании
  useEffect(() => {
    console.log('Effect ran: Component mounted');
    
    // Имитация загрузки данных
    const timer = setTimeout(() => {
      setMessage('Data loaded!');
    }, 2000);

    return () => {
      console.log('Cleanup: Component will unmount');
      clearTimeout(timer);
    };
  }, []); // Пустой массив зависимостей

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Text style={styles.text}>{message}</Text>
      <Button
        title="Increment Count"
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
});

export default Lab2;