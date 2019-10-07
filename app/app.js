import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import ImagesList from './containers/ImagesList';

const App = () => (
  <Provider store={store}>
    <ImagesList />
  </Provider>
);

export default App;
