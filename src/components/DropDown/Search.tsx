import React, { useEffect, useState } from "react";
import {
  debounceFunction,
  useDebounceQuerySet,
  useFetchApi,
} from "./useFetchApi";

const Search = () => {
  const [query, setQuery] = useState<string>("");
  const newQuery = useDebounceQuerySet(query,1000);
  const [pokemonData, setPokemonData] = useState<any>(null);

  const fetchPokemonData = async (query: string) => {
    try {
      const data = await fetch(`https://swapi.dev/api/people/?search=${query}`);
      if (data.ok) {
        const pokemonData = await data.json();
        pokemonData && setPokemonData(pokemonData);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e: any) => {
    let value = e.target.value.substring(0, 5);
    console.log('!@# value', value);
    setQuery(value);
  };
  useEffect(() => {
    newQuery && fetchPokemonData(newQuery);
  }, [newQuery]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <label>Please Enter the Pokemon Name</label>
      <input
        style={{ width: "200px", padding: "12px" }}
        name="QueryField"
        value={query}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Search;
