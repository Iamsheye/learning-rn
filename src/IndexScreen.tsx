import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Keyboard,
  TouchableHighlight,
} from 'react-native';
import Home from './components/Home';
import Container from './components/Container';
import Imgs from './components/Imgs';
import BgImg from './components/BgImg';
import Btns from './components/Btns';
import Touchables from './components/Touchables';
import Input from './components/Input';

const IndexScreen = () => {
  return (
    <ScrollView>
      <View style={styles.parentView}>
        <TouchableHighlight onPress={() => Keyboard.dismiss()}>
          <Container>
            <Home />
            <Imgs />
            <BgImg />
            <Btns />
            <Touchables />
            <Input />
          </Container>
        </TouchableHighlight>
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
