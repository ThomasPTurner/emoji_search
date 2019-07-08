import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import emojis from './emojis.json'
import Results from './components/Results';
import Form from './components/Form';

class App extends Component {
  state = {
    emojis,
    currentSearches: '',
    currentResults: []
  }
  render () {
    return (
      <main> 
        <Header />
        <Results emojis={this.state.emojis} currentSearches={this.state.currentSearches} updateResults={this.updateResults}/>
        <Form updateCurrentSearch={this.updateCurrentSearch}/>
      </main>
    )
  }
  updateCurrentSearch = (search) => {
    this.setState({
      currentSearches: search
    })
  }
  updateResults = (results) => {
    this.setState({
      currentResults: results
    })
  }
}

export default App;
