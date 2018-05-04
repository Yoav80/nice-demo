import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import * as balanceActions from './store/balanceAction'
import List from './comnponents/List'

class App extends Component {
  
  componentDidMount() {
    this.props.loadBalance()
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <List />
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

