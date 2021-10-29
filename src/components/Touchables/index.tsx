import React from 'react';
import { Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import styles, { tHigh } from './styles';

const Touchables = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.heading}>Touchables</Text>
      <View style={styles.touchablesView}>
        <TouchableOpacity style={styles.tOpac} activeOpacity={0.5}>
          <Text style={styles.btn_txt}>Touchable Opacity 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tOpac} activeOpacity={0.5}>
          <Text style={styles.btn_txt}>Touchable Opacity 2</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.touchablesView}>
        <TouchableHighlight style={tHigh} activeOpacity={0.5}>
          <View>
            <Text style={styles.btn_txt}>Touchable Highlight 1</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={tHigh}
          activeOpacity={0.5}
          underlayColor="#FAB">
          <View>
            <Text style={styles.btn_txt}>Touchable Highlight 2</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Touchables;
