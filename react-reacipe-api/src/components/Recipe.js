import React from "react";
import customData from "../customData/results.json";
import { Link } from "react-router-dom";
import Loader from "./Loader";

class Recipe extends React.Component {
  state = {
    activeRecipe: ""
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const API_KEY = "fee2626eb2b64b43a8f1890c40127ff9";
    const CORS = "https://cors-anywhere.herokuapp.com/";
    const API_URL = "https://www.food2fork.com/api/get?key=";

    try {
      const url = `${CORS}${API_URL}${API_KEY}&rId=${id}`;
      let response = await fetch(url);
      let results = await response.json();
      this.setState({
        activeRecipe: results.recipe
      });
    } catch (err) {
      let results = customData;
      let regex = new RegExp(`${id}`, "gi");
      results = results.recipes.filter(result => result.recipe_id.match(regex));
      this.setState({
        activeRecipe: results[0]
      });
    }
  }

  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {recipe.length === 0 && <Loader />}
        {recipe.length !== 0 && (
          <div className="active-recipe col-md-8 col-sm-12 mb-2rem">
            <img
              className="active-recipe-img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe-title">{recipe.title}</h3>
            <h4 className="active-recipe-publisher">
              Publisher: <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe-website">
              Website:{" "}
              <span>
                <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
              </span>
            </p>
            <Link to="">
              <button className="active-recipe-button">Go Home</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
