import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  parentView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 18,
    backgroundColor: '#e8e8e8',
    borderColor: 'teal',
    borderWidth: 3.5,
    borderRadius: 10,
  },
  heyTxt: {
    color: '#383838',
    fontSize: 32,
  },
});

export default styles;
