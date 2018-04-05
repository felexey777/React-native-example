import React from 'react';
import { Provider } from 'react-redux';
import {
  View,
  StatusBar
}
from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import createStore from './Redux';
import AppNavigator from './Navigators/AppNavigator';

const { persistor, store } = createStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={
            <View
              style={{
                backgroundColor: 'red'
              }}
            />
        }
          persistor={persistor}
        >
          <StatusBar backgroundColor={'black'} />
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
