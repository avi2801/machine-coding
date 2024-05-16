import React, { useState, useEffect } from "react";

export const debounceFunction = (callBack: Function, delay: number) => {
  let timeoutId: any;
  return function (...args: any) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callBack(...args);
    }, delay);
  };
};

export const useDebounceQuerySet = (value: string, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<any>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};

export const useFetchApi = (query: string) => {
  const [pokemonData, setPokemonData] = useState();

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

  useEffect(() => {
    fetchPokemonData(query);
  }, [query]);

  return [pokemonData, setPokemonData];
};
