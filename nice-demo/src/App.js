import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as balanceActions from './store/balance/Actions'

import './App.css';
import Balance from './containers/Balance'
import Account from './containers/Account'

class App extends Component {
  
  componentDidMount() {
    this.props.loadBalance()
  }
  
  render() {
    return (
      <div className="App">
        <header className="App__Header">
          <Account />
        </header>

        <section className="App_Content">
          <Balance />
        </section>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadBalance() {
      dispatch(balanceActions.loadBalance())
    }
  }
}

export default connect(null, mapDispatchToProps)(App)

