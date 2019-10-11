import React from 'react';
import {connect} from 'react-redux';
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {fetchImages} from '../../routines';
import styles from './styles';
import * as imageHelper from '../../helpers/imageHelper';

const IMAGES_PER_ROW = 2;

class ImagesListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: props.loading || false,
    };
    this.goToImage = this.goToImage.bind(this);
    this.handleRefresch = this.handleRefresch.bind(this);
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

  async handleRefresch() {
    this.setState({refreshing: true});
    await this.props.fetchImages();
    this.setState({refreshing: false});
  }

  render() {
    const {loading, images} = this.props;
    const {refreshing} = this.state;
    console.log('loading: ', loading, 'refreshing: ', refreshing);

    return loading ? (
      <View>
        <Text>Loading</Text>
      </View>
    ) : (
      <FlatList
        data={images}
        renderItem={({item}) => this.renderItem(item)}
        keyExtractor={item => item.id}
        numColumns={2}
        onRefresh={this.handleRefresch}
        refreshing={refreshing}
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
