import React from "react";
import { Link } from "react-router-dom";

const SearchResultsItems = ({ recipe }) => (
  <Link to={`/recipe/${recipe.recipe_id}`}>
    <button className="recipe-button">View Recipe </button>
  </Link>
);

const SearchResults = props => {
  return (
    <div className="container">
      <div className="row">
        {props.recipes.map(recipe => {
          return (
            <div
              key={recipe.recipe_id}
              className="col-lg-4 col-md-6 col-sm-12 mb-2rem"
            >
              <div className="recipes-box">
                <img
                  className="recipes-box-img"
                  src={recipe.image_url}
                  alt={recipe.title}
                />
                <div className="recipe-text">
                  <h5>
                    {recipe.title.length < 20
                      ? `${recipe.title}`
                      : `${recipe.title.substring(0, 25)}...`}
                  </h5>
                  <p className="recipes-subtitle">
                    Publisher: <span>{recipe.publisher}</span>
                  </p>
                </div>
                <SearchResultsItems recipe={recipe} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
