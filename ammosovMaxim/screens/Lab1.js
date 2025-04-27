// screens/Lab1.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Lab1 = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Лабораторная 1</Text>
      <Text>Счётчик: {counter}</Text>
      <Button title="Увеличить счётчик" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Lab1;
