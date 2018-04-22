import 'expo';
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import { fetchImages, FETCH_IMAGES_BEGIN } from './src/actions/actions';

import rootReducer from './src/reducers/AppReducer';
import Search from './src/components/search/search';
import Feed from './src/components/feed/feed';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);

const colors = {
  white: '#fff',
};

const styles = StyleSheet.create({
  container: { flex: 1, alignSelf: 'stretch', backgroundColor: colors.white },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center',
  },
});

export default class App extends React.Component {
  componentDidMount() {
    store.dispatch({ type: FETCH_IMAGES_BEGIN });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Image Search</Text>
        <Search value="TEST" />
        <Text>{store}</Text>
        <Feed />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchRequest: keyword => dispatch({ type: FETCH_IMAGES_BEGIN }),
  };
}

function mapStateToProps(state) {
  return {
    images: state.images,
    keyword: state.keyword,
  };
}
