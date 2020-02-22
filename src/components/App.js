import React from 'react';
// Routing
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
// Redux Connect
import {connect} from 'react-redux';
// Prop Types
import PropTypes from 'prop-types';
// React Intl
import {IntlProvider} from 'react-intl';
import messages from '../messages';
// Components
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import Navbar from './Navbar/NavBar';
// Styles
import '../index.scss';
import '../main.css';

function App(props) {
  const {lang} = props;
  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/about' component={AboutPage}/>
          <Redirect from='*' to={'/'}/>
        </Switch>
      </BrowserRouter>
    </IntlProvider>
  );
}

App.propTypes = {
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  lang: state.locale.lang,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
