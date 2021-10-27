import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

const Imgs = () => {
  return (
    <View style={styles.imgView}>
      <Image
        style={styles.img}
        source={require('../../assets/images/gopher.png')}
      />
    </View>
  );
};

export default Imgs;
