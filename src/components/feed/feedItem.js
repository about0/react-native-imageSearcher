import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const feedItem = props => (
  <TouchableOpacity>
    <Image style={props.style} source={props.source} />
  </TouchableOpacity>
);

export default feedItem;
