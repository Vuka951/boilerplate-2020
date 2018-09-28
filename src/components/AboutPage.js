import React, {Component} from 'react';
import {connect} from 'react-redux';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <h1>THis is the about page</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
