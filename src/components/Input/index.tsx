import React, { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';
import styles from './styles';

const Input = () => {
  const [value, setValue] = useState('');
  const [number, setNumber] = useState('');
  const [pword, setPword] = useState('');

  return (
    <View style={styles.view}>
      <Text style={styles.heading}>Input</Text>
      <View>
        <TextInput
          style={[styles.input]}
          value={value}
          onChangeText={setValue}
          placeholder="Enter your Name"
          placeholderTextColor="#f8f8f8"
        />
        {value.length > 0 && <Text style={styles.inputTxt}>{value}</Text>}
        <TextInput
          style={styles.input}
          value={number}
          onChangeText={setNumber}
          keyboardType="numeric"
          placeholder="Enter your Phone Number"
          placeholderTextColor="#f8f8f8"
        />
        <TextInput
          style={styles.input}
          value={pword}
          onChangeText={txt => {
            setPword(txt);
            Alert.alert('Password Changed', txt);
          }}
          placeholder="Enter your Password"
          placeholderTextColor="#f7bbbb"
          secureTextEntry={true}
        />
        <Text style={styles.inputTxt}>{number}</Text>
      </View>
    </View>
  );
};

export default Input;
