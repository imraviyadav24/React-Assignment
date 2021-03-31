import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Body from './Body.js';
import { fetchToken, loadUser } from "./actions/authAction";
import AppNavBar from './AppNavBar';

class App extends Component {
  componentDidMount(){
    store.dispatch(fetchToken());
  }
  render(){
    return (
      <Provider store={store}>
        <div className="App">
            <AppNavBar/>
            <Body/>
          </div>
      </Provider>
    );  
 }}

export default App;
