import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './store';
import {Provider} from 'react-redux';
import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import sr from 'react-intl/locale-data/sr';
import {localeSet} from './actions/locale';
import App from './components/App';
import CssBaseline from '@material-ui/core/CssBaseline';

addLocaleData(en);
addLocaleData(sr);

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
