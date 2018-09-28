import React, {Component} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import {setLocale} from '../actions/locale';


export class Navigation extends Component {
  render() {
    return (
      <div style={{display: 'block'}}>
        <Link to='/'><FormattedMessage id="homepage" defaultMessage="Homepage"/></Link>
        <Link to='/about'>AboutPage</Link>
        <a onClick={() => this.props.setLocale('en')}>EN</a>
        <a onClick={() => this.props.setLocale('sr')}>SR</a>
      </div>
    );
  }
}

Navigation.propTypes = {
  setLocale: propTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps, {setLocale}, null, {pure: false})(Navigation);
