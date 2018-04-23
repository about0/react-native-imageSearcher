import React from 'react';
import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import FeedItem from './feedItem';

const windowWidth = Dimensions.get('window').width;
const IMAGES_PER_ROW = 3;

const calculatedSize = (() => {
  const size = windowWidth / IMAGES_PER_ROW;
  return { width: size, height: size };
})();

console.log(calculatedSize, windowWidth);

const styles = StyleSheet.create({
  containerList: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: calculatedSize.width,
    height: calculatedSize.height,
  },
});

const feed = props => (
  <View style={styles.containerList}>
    <FlatList
      data={props.images}
      renderItem={({ item }) => (
        <FeedItem source={{ uri: item.thumbnailUrl }} style={styles.image} />
      )}
      keyExtractor={(item, index) => index}
    />
  </View>
);

export default feed;
