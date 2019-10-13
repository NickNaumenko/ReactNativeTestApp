import React from 'react';
import {connect} from 'react-redux';
import {
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {fetchImages} from '../../routines';
import styles from './styles';
import * as imageHelper from '../../helpers/imageHelper';
import Loader from '../../components/Loader';

const IMAGES_PER_ROW = 2;

class ImagesListView extends React.Component {
  constructor(props) {
    super(props);

    this.goToImage = this.goToImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchImages();
  }

  renderItem(item) {
    const {
      urls,
      user: {name},
    } = item;

    const {width} = Dimensions.get('window');
    const imageSize = width / IMAGES_PER_ROW;
    const image = imageHelper.choseImage(imageSize);

    return (
      <TouchableOpacity
        onPress={() => this.goToImage(item)}
        style={styles.listItem}>
        <Image
          source={{uri: urls[image]}}
          style={{height: imageSize}}
          resizeMode="cover"
        />
        <Text style={styles.author}>{name}</Text>
      </TouchableOpacity>
    );
  }

  goToImage(image) {
    const {navigation} = this.props;
    navigation.navigate('Image', {image});
  }

  render() {
    const {loading, images, fetchImages} = this.props;

    return loading ? (
      <Loader />
    ) : (
      <FlatList
        data={images}
        renderItem={({item}) => this.renderItem(item)}
        keyExtractor={item => item.id}
        numColumns={2}
        onRefresh={fetchImages}
        refreshing={false}
        style={styles.imagesList}
      />
    );
  }
}

const mapStateToProps = ({imagesList: {loading, images}}) => ({
  images,
  loading,
});

const mapDispatchToProps = {
  fetchImages,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImagesListView);
