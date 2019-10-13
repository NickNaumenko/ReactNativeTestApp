import {PixelRatio} from 'react-native';

export const choseImage = width => {
  const pixelSizeForLayoutSize = PixelRatio.getPixelSizeForLayoutSize(width);
  switch (true) {
    case pixelSizeForLayoutSize > 1080:
      return 'full';
    case pixelSizeForLayoutSize > 400:
      return 'regular';
    case pixelSizeForLayoutSize > 200:
      return 'small';
    default:
      return 'thumb';
  }
};
