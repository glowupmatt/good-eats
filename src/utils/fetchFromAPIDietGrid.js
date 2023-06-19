import axios from "axios";

const BASE_URL_DiffCuisineFood =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random";
//Get Mexican Food

const optionsGetMexicanFood = {
  url: BASE_URL_DiffCuisineFood,
  params: {
    tags: "mexican",
    number: "6",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPIGetMexicanFood = async () => {
  const { data } = await axios.get(
    `${BASE_URL_DiffCuisineFood}`,
    optionsGetMexicanFood
  );
  return data;
};

//Get italian Food

const optionsGetItalianFood = {
  url: BASE_URL_DiffCuisineFood,
  params: {
    tags: "italian",
    number: "6",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPIGetItalianFood = async () => {
  const { data } = await axios.get(
    `${BASE_URL_DiffCuisineFood}`,
    optionsGetItalianFood
  );
  return data;
};

//Get asian Food

const optionsGetAsianFood = {
  url: BASE_URL_DiffCuisineFood,
  params: {
    tags: "asian",
    number: "6",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPIGetAsianFood = async () => {
  const { data } = await axios.get(
    `${BASE_URL_DiffCuisineFood}`,
    optionsGetAsianFood
  );
  return data;
};

//Get Thai Food

const optionsGetThaiFood = {
  url: BASE_URL_DiffCuisineFood,
  params: {
    tags: "thai",
    number: "6",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPIGetThaiFood = async () => {
  const { data } = await axios.get(
    `${BASE_URL_DiffCuisineFood}`,
    optionsGetThaiFood
  );
  return data;
};

//Get spanish Food

const optionsGetSpanishFood = {
  url: BASE_URL_DiffCuisineFood,
  params: {
    tags: "spanish",
    number: "6",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPIGetSpanishFood = async () => {
  const { data } = await axios.get(
    `${BASE_URL_DiffCuisineFood}`,
    optionsGetSpanishFood
  );
  return data;
};

//Get Korean Food

const optionsGetKoreanFood = {
  url: BASE_URL_DiffCuisineFood,
  params: {
    tags: "korean",
    number: "6",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPIGetKoreanFood = async () => {
  const { data } = await axios.get(
    `${BASE_URL_DiffCuisineFood}`,
    optionsGetKoreanFood
  );
  return data;
};
