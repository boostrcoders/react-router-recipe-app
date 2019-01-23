import React from "react";
import "../App.css";

const Form = props => {
  return (
    <div>
      <form className="mb-2rem" onSubmit={props.formSubmitted}>
        <input className="form-input" type="text" name="searchInput" />
        <button className="form-button" type="submit">
          Seacrh
        </button>
      </form>
    </div>
  );
};

export default Form;
