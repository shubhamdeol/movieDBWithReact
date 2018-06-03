import React, { Component } from 'react';
import Style from './App.css';
import MovieMaker from './container/MovieMaker/MovieMaker';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className={Style.App}>
          <Route path="/" exact component = {MovieMaker}/>
      </div>
    );
  }
}

export default App;
