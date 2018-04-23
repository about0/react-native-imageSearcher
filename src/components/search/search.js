import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { Select, Option } from 'react-native-chooser';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchField: { height: 40, width: '90%', top: 0 },
  clearButton: {},
  select: {
    width: 30,
  },
  backdropStyle: {
    backgroundColor: '#d3d5d6',
  },
  optionListStyle: {
    backgroundColor: '#F5FCFF',
  },
});

const search = props => (
  <View style={styles.container}>
    <TextInput
      placeholder="Search here"
      value={props.value}
      onChangeText={props.onChange}
      style={styles.searchField}
    />
    <TouchableOpacity onPress={props.clearField} style={styles.clearButton}>
      <Text>X</Text>
    </TouchableOpacity>
    <Select
      onSelect={props.onChangeItems}
      defaultText={props.imagesPerRow}
      style={styles.select}
      textStyle={{}}
      backdropStyle={styles.backdropStyle}
      optionListStyle={styles.optionListStyle}
    >
      <Option value={2}>2</Option>
      <Option value={3}>3</Option>
      <Option value={4}>4</Option>
    </Select>
  </View>
);

export default search;
