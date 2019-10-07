import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {fetchImages} from '../../routines';

class ImagesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('fetching images from component');
    this.props.fetchImages();
  }

  render() {
    return (
      <View>
        <Text>Hello I'm list</Text>
      </View>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  fetchImages,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImagesList);
// export default ImagesList;
