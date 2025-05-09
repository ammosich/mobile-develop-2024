import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Выбор лабораторных</Text>
      <Button 
        title="Лабораторная 1"
        onPress={() => navigation.navigate('Lab1')}
      />
      <Button 
        title="Лабораторная 2"
        onPress={() => navigation.navigate('Lab2')}
      />
      <Button 
        title="Лабораторная 3"
        onPress={() => navigation.navigate('Lab3')}
      />
      <Button 
        title="Лабораторная 4"
        onPress={() => navigation.navigate('Lab4')}
      />
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

export default Home;