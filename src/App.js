import React, { Component } from 'react';
import Style from './App.css';
import MovieMaker from './container/MovieMaker/MovieMaker';

class App extends Component {
  render() {
    return (
      <div className={Style.App}>
          <MovieMaker />
      </div>
    );
  }
}

export default App;
