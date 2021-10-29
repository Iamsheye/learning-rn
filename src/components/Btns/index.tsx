import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles';

const Btns = () => {
  const [num, setNum] = useState<number>(0);

  const red = {
    color: 'red',
  };

  const green = {
    color: 'limegreen',
  };

  return (
    <View style={styles.btnView}>
      <Button
        title="Add (+)"
        color="#36f5a5"
        onPress={() => setNum(n => n + 1)}
        disabled={num >= 10}
      />
      <Text style={[styles.num_txt, num === 0 && red, num === 10 && green]}>
        {num > 0 ? num : 0}
      </Text>
      <Button
        title="Subtract (-)"
        onPress={() => setNum(n => n - 1)}
        color="crimson"
        disabled={num < 1}
      />
    </View>
  );
};

export default Btns;
