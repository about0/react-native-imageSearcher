import React from 'react';
import { FlatList, Image } from 'react-native';

const feed = props => (
  <FlatList
    data={props.images}
    renderItem={({ item }) => (
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: item.thumbnailUrl }}
      />
    )}
    keyExtractor={(item, index) => index}
  />
);

export default feed;
