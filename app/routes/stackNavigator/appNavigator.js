import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ImagesListView from '../../views/ImagesListView';
import ImageView from '../../views/ImageView';

const AppNavigator = createStackNavigator({
  ImagesList: {
    screen: ImagesListView,
    navigationOptions: {
      header: null,
    },
  },
  Image: {
    screen: ImageView,
  },
});

export default createAppContainer(AppNavigator);
