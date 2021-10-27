import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imgView: {
    marginVertical: 16,
    borderRadius: 8,
    borderWidth: 4,
    borderColor: '#7535eb',
    backgroundColor: 'white',
  },
  img: {
    width: '100%',
    height: 360,
    resizeMode: 'contain',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  imgTxt: {
    fontSize: 30,
    color: '#eb5e34',
    backgroundColor: '#f8f8f8',
    borderColor: '#eb5e34',
    borderWidth: 2,
    borderRadius: 6,
    fontWeight: '800',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 16,
    marginBottom: 12,
  },
});

export default styles;
