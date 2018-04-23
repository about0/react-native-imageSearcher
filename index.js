import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { FETCH_IMAGES_BEGIN } from './src/actions/actions';
// import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';

// const loggerMiddleware = createLogger();

// function mapStateToProps(state) {
//   return {
//     images: state.images,
//     keyword: state.keyword,
//   };
// }

registerRootComponent(App);
