import React from 'react';
import { TextInput } from 'react-native';

const search = props => (
  <TextInput placeholder="Search here" value={props.value} />
);

export default search;
