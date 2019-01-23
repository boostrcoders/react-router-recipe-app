import customData from "./customData/results.json";

const API_KEY = "fee2626eb2b64b43a8f1890c40127ff9";
const CORS = "https://cors-anywhere.herokuapp.com/";
const API_URL = "https://www.food2fork.com/ap/search?key=";
// "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?"

export default {
  async search(searchInput, page) {
    let newPage = page === "" ? "" : `&p=${page}`;
    try {
      const url = `${CORS}${API_URL}${API_KEY}&q=${searchInput}${newPage}`;
      let response = await fetch(url);
      let results = await response.json();
      return results.recipes;
    } catch (err) {
      let results = customData;
      let regex = new RegExp(`${searchInput}?`, "gi");
      results = results.recipes.filter(result => result.title.match(regex));
      return results;
    }
  }
};
