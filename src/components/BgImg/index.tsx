import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './styles';

const BgImg = () => {
  return (
    <View style={styles.imgView}>
      <ImageBackground
        style={styles.img}
        source={require('../../assets/images/gopher.png')}>
        <Text style={styles.imgTxt}>An Image</Text>
      </ImageBackground>
    </View>
  );
};

export default BgImg;
