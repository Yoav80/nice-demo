import React, { Component } from 'react';
import {connect} from 'react-redux'

import loadBalance from './store/balance/actions'
import Balance from './containers/Balance'
import Account from './containers/Account'
import './App.css';

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

        <section className="App__Content">
          <Balance />
        </section>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadBalance() {
      dispatch(loadBalance())
    }
  }
}

export default connect(null, mapDispatchToProps)(App)

