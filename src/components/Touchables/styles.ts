import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f8f8f8',
  },
  view: {
    marginVertical: 8,
  },
  touchablesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 8,
  },
  tOpac: {
    color: '#084e36',
    backgroundColor: '#1099d3',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
  },
  highlight: {
    backgroundColor: '#764abc',
  },
  btn_txt: {
    color: '#f8f8f8',
  },
});

export const tHigh = StyleSheet.compose(styles.tOpac, styles.highlight);

export default styles;
