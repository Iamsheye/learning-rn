import React from 'react';
import { StyleSheet, View } from 'react-native';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: { marginHorizontal: 12, marginVertical: 18 },
});
export default Container;
