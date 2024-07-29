import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "b000760182f248f1b5b79180ce34edb2";

export default function Search() {
  const [query, setQuery] = useState("pizza");
  //useEffect  hook syntax
  useEffect(() => {
    function fetchFood() {
      fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
    }
  }, [query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
