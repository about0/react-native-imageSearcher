import 'expo';

import { AppRegistry } from 'react-native';
import { registerRootComponent } from 'expo';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { searchRequest, receiveImages } from './src/actions/actions';

import rootReducer from './src/reducers/AppReducer';
import App from './App';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware),
);

registerRootComponent(App);
