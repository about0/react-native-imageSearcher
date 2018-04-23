import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './src/reducers/AppReducer';
import RootComponent from './src/RootComponent';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)),
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootComponent />
      </Provider>
    );
  }
}

export default App;
