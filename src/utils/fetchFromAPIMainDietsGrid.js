import axios from "axios";

const BASE_URL_DiffDietsFood =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random";

const optionsGetVegetarian = {
  url: BASE_URL_DiffDietsFood,
  params: {
    tags: "vegetarian",
    number: "6",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPIGetVegetarian = async () => {
  const { data } = await axios.get(
    `${BASE_URL_DiffDietsFood}`,
    optionsGetVegetarian
  );
  return data;
};

const optionsGetPescatarian = {
  url: BASE_URL_DiffDietsFood,
  params: {
    tags: "vegan",
    number: "6",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPIGetPescatarian = async () => {
  const { data } = await axios.get(
    `${BASE_URL_DiffDietsFood}`,
    optionsGetPescatarian
  );
  return data;
};

const optionsGetKeto = {
  url: BASE_URL_DiffDietsFood,
  params: {
    tags: "ketogenic",
    number: "6",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPIGetKeto = async () => {
  const { data } = await axios.get(`${BASE_URL_DiffDietsFood}`, optionsGetKeto);
  return data;
};
