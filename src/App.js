import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home'
import Header from './Components/Header'
import HuntingList from './Components/HuntingList'
import notFound from './Components/404'
import './App.css';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path='/huntinglist' component={HuntingList} />
          <Route component={notFound} />
        </Switch>
     </BrowserRouter>
    );
  }
}

export default App;
