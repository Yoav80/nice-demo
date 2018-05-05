import React, { Component } from 'react';
import {connect} from 'react-redux'

import './Account.css';


class Account extends Component {
    render() {
      const { balance, name, currency, error } = this.props;
      
      if (error) {
        return (
          <div className='Account'>
            Error loading account data 
          </div>
        )
      }

      return (
        <div className='Account'>
          <span className='Account__item'>
            Balance: { balance } { currency}
          </span>

          <span className='Account__item'>
            name: { name }
          </span>
        </div>
      )
    }
  }
  
function mapStateToProps(state) {

    if (state.balance.fetchError === true) {
      return {
        error: true
      }
    }
    
    const data = state.balance.account;
    const { balance, iban, name } = data;
    const currency = state.balance.currency;

    return {
      balance, iban, name, currency
    }
}

export default connect(mapStateToProps, null)(Account)
