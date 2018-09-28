import React, {Component} from 'react';
import {connect} from 'react-redux';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Text from the homePage</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
