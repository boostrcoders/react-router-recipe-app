import React from "react";
import API from "../API";
class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = () => {
    const title = this.props.location.state.recipe;
    console.log(title);
    API.search(title).then(results => {
      this.setState({
        activeRecipe: results[0]
      });
      console.log(this.state.activeRecipe);
    });
  };
  render() {
    return <div>Recipe Component</div>;
  }
}
export default Recipe;
