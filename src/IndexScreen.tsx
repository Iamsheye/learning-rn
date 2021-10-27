import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Home from './components/Home';
import Container from './components/Container';
import Imgs from './components/Imgs';
import BgImg from './components/BgImg';

const IndexScreen = () => {
  return (
    <ScrollView>
      <View style={styles.parentView}>
        <Container>
          <Home />
          <Imgs />
          <BgImg />
        </Container>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parentView: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#333',
  },
});

export default IndexScreen;
