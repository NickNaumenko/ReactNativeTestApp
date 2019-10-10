import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import styles from './styles';
import * as imageHelper from '../../helpers/imageHelper';

const {width, height} = Dimensions.get('window');

const ImageView = props => {
  const {navigation} = props;
  const image = imageHelper.choseImage(width);
  const {urls} = navigation.getParam('image');

  return (
    <View style={styles.container}>
      <Image
        style={{width, height}}
        source={{uri: urls[image]}}
        resizeMode="contain"
      />
    </View>
  );
};

export default ImageView;
