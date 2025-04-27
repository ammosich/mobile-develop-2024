import React, {useState, useMemo} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Lab3 = () => {
  const [count, setCount] = useState(0);
  const [otherValue, setOtherValue] = useState(0);
  const [timeWithoutMemo, setTimeWithoutMemo] = useState(0);
  const [timeWithMemo, setTimeWithMemo] = useState(0);

  // Функция, которая выполняет тяжелые вычисления
  const heavyCalculation = num => {
    console.log('Выполняются тяжелые вычисления...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num;
    }
    return result;
  };

  // Вычисление без useMemo
  const valueWithoutMemo = heavyCalculation(count);

  // Используем useMemo для кэширования результата тяжелых вычислений
  const memoizedValue = useMemo(() => {
    const startTime = performance.now();
    const result = heavyCalculation(count);
    const endTime = performance.now();
    setTimeWithMemo(endTime - startTime);
    return result;
  }, [count]);

  // Измеряем время выполнения без useMemo
  React.useEffect(() => {
    const startTime = performance.now();
    heavyCalculation(count);
    const endTime = performance.now();
    setTimeWithoutMemo(endTime - startTime);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Результат с useMemo: {memoizedValue}</Text>
      <Text style={styles.text}>Время с useMemo: {timeWithMemo.toFixed(2)} мс</Text>
      <Text style={styles.text}>Результат без useMemo: {valueWithoutMemo}</Text>
      <Text style={styles.text}>Время без useMemo: {timeWithoutMemo.toFixed(2)} мс</Text>
      <Text style={styles.text}>Счетчик: {count}</Text>
      <Text style={styles.text}>Другое значение: {otherValue}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Увеличить счетчик" onPress={() => setCount(count + 1)} />
        <Button
          title="Изменить другое значение"
          onPress={() => setOtherValue(otherValue + 1)}
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
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
});

export default Lab3;
