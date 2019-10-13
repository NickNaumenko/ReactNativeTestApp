import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Loader = () => (
  <View style={styles.loaderWrapper}>
    <Text>Loading...</Text>
  </View>
);

export default Loader;
