import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  searchField: {
  },
  clearButton: {
    flex: 1,
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
  </View>
);

export default search;
