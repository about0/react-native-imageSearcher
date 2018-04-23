import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './src/reducers/AppReducer';

import RootComponent from './src/RootComponent';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)),
);

class App extends React.Component {
  // componentDidMount() {
  //   // store.dispatch({ type: FETCH_IMAGES_BEGIN });
  //   store.dispatch(fetchImages());
  // }

  render() {
    return (
      <Provider store={store}>
        <RootComponent />
      </Provider>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onFetchRequest: keyword => dispatch({ type: FETCH_IMAGES_BEGIN }),
//   };
// }

// function mapStateToProps(state) {
//   return {
//     images: state.images,
//     keyword: state.keyword,
//   };
// }

// connect(mapStateToProps)(App);

export default App;
