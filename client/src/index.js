import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store/index';
// redux-persist
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserHistory } from "history";
const persistor = persistStore(store);
const hist = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={hist}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
