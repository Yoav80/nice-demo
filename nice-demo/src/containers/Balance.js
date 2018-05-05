import React, { Component } from 'react';
import {connect} from 'react-redux'

import List from '../comnponents/List';
import BalanceListRow from '../comnponents/BalanceListRow';


class Balance extends Component {
  
    render() {       
      const { transactions, fetchError , currency } = this.props;
      
      if (fetchError) {
        return (
          <div>
              Error loading balance data.
          </div>
        )
      }   
      return (
        <List>
          {transactions.map( (rowData, index) => {
              return (
                <BalanceListRow rowData={rowData} currency={currency} key={index}/>
              )
          })}
        </List>
      )
    }

  }
  


  function mapStateToProps(state) {
  return {
    transactions: state.balance.transactions,
    currency: state.balance.currency,
    fetchError: state.balance.fetchError
  }
}

export default connect(mapStateToProps, null)(Balance)


