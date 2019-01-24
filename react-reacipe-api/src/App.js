import React, { Component } from "react";
import Form from "./components/Form";
import SearchResults from "./components/SearchResults";
import Loader from "./components/Loader";
import API from "./API";
import "./App.css";

class App extends Component {
  state = {
    title: "Recipe Search",
    loading: false,
    page: 1,
    recipes: [],
    searchInput: "",
    activeRecipe: ""
  };

  formSubmitted(e) {
    e.preventDefault();
    const searchInput = e.target.elements.searchInput.value;
    this.loadSearch(searchInput, 1);
  }

  loadSearch(searchInput, page) {
    this.setState({
      loading: true
    });
    API.search(searchInput, page).then(results => {
      this.setState({
        loading: false,
        recipes: results
      });
    });
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  };
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };
  render() {
    const { loading, recipes, title } = this.state;
    return (
      <div className="App">
        <Form title={title} formSubmitted={this.formSubmitted.bind(this)} />

        {!loading && recipes.length === 0 && <p>No Recipe have been found</p>}
        {loading && <Loader />}
        {!loading && <SearchResults recipes={recipes} />}
      </div>
    );
  }
}

export default App;
