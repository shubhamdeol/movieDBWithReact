import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from '../../component/SearchButton/Suggestions';
import Style from './SearchButton.css';

class Search extends Component {
  state = {
    error: false,
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get('/3/search/movie', {
      params: {
        query: this.state.query,
      }
    })
      .then( res => {
        this.setState({
          results: res.data.results
        })
    
      })
      .catch(() => this.setState({ error: true }))
  }

  handleInputChange = (e) => {
      this.setState({
        query: e.target.value
      }, () => this.getInfo()
      )
  }

  render() {
    return (
      <form className={Style.Form}>
        <div className={Style.Search}>
        <input
          type="search"
          placeholder="Search In MovieDB"
          onChange={this.handleInputChange}
        />
        </div>
        <Suggestions results = {this.state.results}/>
      </form>
    )
  }
}

export default Search