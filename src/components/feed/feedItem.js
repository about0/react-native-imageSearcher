import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
});

const feedItem = props => <Image style={props.style} source={props.source} />;

export default feedItem;
