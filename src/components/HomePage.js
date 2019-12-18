import React from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';

function HomePage() {
  return (
    <div>
      <i className="fab fa-linkedin-in"></i>
      <FormattedMessage id="homepage-text" defaultMessage="This is some Text on the home page"/>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
