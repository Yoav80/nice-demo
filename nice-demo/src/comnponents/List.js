import React, { Component } from 'react';
import {connect} from 'react-redux'


class List extends Component {
    render() {
      return (
        <div>im a list</div>
      )
    }
  }
  
function mapStateToProps(state) {
  return {
    balance: state.balance.transactions,
  }
}

export default connect(mapStateToProps, null)(List)
