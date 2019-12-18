import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './store';
import {Provider} from 'react-redux';
import {localeSet} from './actions/locale';
import App from './components/App';
import CssBaseline from '@material-ui/core/CssBaseline';

// Loads the last selected lang on the site from local storage( if its in there)
if (localStorage.boilerLang) {
  store.dispatch(localeSet(localStorage.boilerLang));
}

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <App/>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
