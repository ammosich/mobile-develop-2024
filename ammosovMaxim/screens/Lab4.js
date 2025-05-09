import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

const Lab4 = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark); // Получаем состояние темы

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#333' : '#fff' }]}>
      <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>Демонстрация Redux (Lab4)</Text>
      <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Текущая тема: {isDark ? 'Тёмная' : 'Светлая'}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Переключить тему"
          onPress={() => dispatch(toggleTheme())}
        />
      </View>
      <View style={styles.navigationButton}>
        <Button title="Назад" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

export default Lab4;

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
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  navigationButton: {
    marginTop: 10,
  },
});