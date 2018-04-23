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
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchField: { height: 40, width: '90%', top: 0 },
  clearButton: {},
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
