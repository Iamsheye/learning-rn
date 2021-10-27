import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.parentView}>
      <Text style={styles.heyTxt}>Hey guys</Text>
      <Text style={{ fontSize: 30 }}>🤟</Text>
    </View>
  );
};

export default Home;
