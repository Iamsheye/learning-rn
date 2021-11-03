import React from 'react';
import {
  Alert,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import styles, { tHigh } from './styles';

const Touchables = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.heading}>Touchables</Text>
      <View style={styles.touchablesView}>
        <TouchableOpacity
          style={styles.tOpac}
          activeOpacity={0.5}
          onPress={() =>
            Alert.alert('You clicked', 'Hellooo', [
              { text: 'Hiiii' },
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              { text: 'OK' },
            ])
          }>
          <Text style={styles.btn_txt}>Touchable Opacity 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tOpac} activeOpacity={0.5}>
          <Text style={styles.btn_txt}>Touchable Opacity 2</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.touchablesView}>
        <TouchableHighlight style={tHigh}>
          <View>
            <Text style={styles.btn_txt}>Touchable Highlight 1</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={tHigh}
          onPress={() => console.log('CLICKED 2')}>
          <View>
            <Text style={styles.btn_txt}>Touchable Highlight 2</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Touchables;
