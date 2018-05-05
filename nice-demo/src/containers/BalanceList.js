import React, { Component } from 'react';
import {connect} from 'react-redux'

import List from '../comnponents/List';


class BalanceList extends Component {
    render() {
      return (
        <div>
            im a list

            <List/>
        </div>
      )
    }
  }
  
function mapStateToProps(state) {
  return {
    balance: state.balance.transactions,
    account: {},
    transactions: [],
    currency: '',
    fetchError: false
  }
}

export default connect(mapStateToProps, null)(BalanceList)
