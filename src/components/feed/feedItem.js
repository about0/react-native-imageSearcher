import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const feedItem = props => (
  <TouchableOpacity onPress={}>
    <Image style={props.style} source={{ uri: props.image.thumbnailUrl }} />
  </TouchableOpacity>
);

export default feedItem;
