import React, { Component } from "react";
import Form from "./components/Form";
import SearchResults from "./components/SearchResults";
import API from "./API";
import "./App.css";

class App extends Component {
  state = {
    title: "Recipe Search",
    loading: false,
    page: 1,
    recipes: [],
    activeRecipe: ""
  };

  formSubmitted(e) {
    e.preventDefault();
    const searchInput = e.target.elements.searchInput.value;

    this.loadSearch(searchInput, 1);
  }

  loadSearch(searchInput, page) {
    API.search(searchInput, page).then(results => {
      this.setState({
        loading: false,
        recipes: results
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <Form formSubmitted={this.formSubmitted.bind(this)} />
        <SearchResults recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
