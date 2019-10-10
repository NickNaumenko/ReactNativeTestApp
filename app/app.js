import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import ImagesListView from './views/ImagesListView';
import {AppNavigator} from './routes';

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
