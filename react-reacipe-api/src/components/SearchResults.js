import React from "react";
import { Link } from "react-router-dom";

const SearchResults = props => {
  return (
    <div className="container">
      <div className="row">
        {props.recipes.map(recipe => {
          return (
            <div key={recipe.recipe_id} className="col-md-4 col-sm-6 mb-2rem">
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

                <Link
                  to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: { recipe: recipe.title }
                  }}
                >
                  <button className="recipe-button">View Recipe</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
