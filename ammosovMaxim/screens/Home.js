// screens/Home.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Выбор лабораторных работ</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Лабораторная 1"
          onPress={() => navigation.navigate('Lab1')}
          color="#4CAF50"
        />
        <View style={styles.buttonSpacing} />
        <Button
          title="Лабораторная 2"
          onPress={() => navigation.navigate('Lab2')}
          color="#2196F3"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
  },
  buttonSpacing: {
    height: 20,
  }
});

export default Home;