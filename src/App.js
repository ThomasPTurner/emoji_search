import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import emojis from "./emojis.json";
import Results from "./components/Results";
import Form from "./components/Form";

class App extends Component {
  state = {
    currentSearches: "",
    currentResults: [],
    firstMount: true
  };
  render() {
    return (
      <main>
        <Header />
        <Results
          emojiResult={this.state.currentResults}
          firstMount={this.state.firstMount}
        />
        <Form updateCurrentSearch={this.updateCurrentSearch} />
      </main>
    );
  }
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.currentSearches !== prevState.currentSearches) {
      this.filterEmojis();
    }
    if (this.state.firstMount) {
      this.setState({ firstMount: false });
    }
  }

  filterEmojis = () => {
    const emojiResults = emojis.filter(emoji => {
      return emoji.keywords.split(" ").includes(this.state.currentSearches);
    });
    this.setState({ currentResults: emojiResults });
  };

  updateCurrentSearch = search => {
    this.setState({
      currentSearches: search
    });
  };
  updateResults = results => {
    this.setState({
      currentResults: results
    });
  };
}

export default App;
