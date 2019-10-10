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

const {width, height} = Dimensions.get('window');

class ImagesListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: props.loading || false,
    };
    this.goToImage = this.goToImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchImages();
  }

  renderItem(item) {
    const {
      urls: {thumb},
      user: {name},
    } = item;

    return (
      <TouchableOpacity onPress={() => this.goToImage(item)}>
        <Image
          source={{uri: thumb}}
          style={{height: 200, width: 200}}
          resizeMode="contain"
        />
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  }

  goToImage(image) {
    const {navigation} = this.props;
    navigation.navigate('Image', {image});
  }

  render() {
    const {loading, images, fetchImages} = this.props;
    const {refreshing} = this.state;
    console.log(loading);

    return loading ? (
      <View>
        <Text>Loading</Text>
      </View>
    ) : (
      <FlatList
        data={images}
        renderItem={({item}) => this.renderItem(item)}
        keyExtractor={item => item.id}
        onRefresh={fetchImages}
        refreshing={refreshing}
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
// export default ImagesList;
