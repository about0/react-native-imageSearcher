import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import FeedItem from './feedItem';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  containerList: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    margin: 1,
  },
});
class Feed extends Component {
  calculatedSize() {
    const size = windowWidth / this.props.imagesPerRow;
    return { width: size, height: size };
  }

  render() {
    return (
      <View style={styles.containerList}>
        <FlatList
          numColumns={this.props.imagesPerRow}
          data={this.props.images}
          renderItem={({ item }) => (
            <FeedItem
              source={{ uri: item.thumbnailUrl }}
              style={(styles.image, this.calculatedSize())}
            />
          )}
          keyExtractor={(item, index) => index}
          key={this.props.imagesPerRow === 2 ? 1 : 0}
        />
      </View>
    );
  }
}

export default Feed;
