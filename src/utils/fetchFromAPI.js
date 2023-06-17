import axios from "axios";

// Home Page

// Random Recipes
// Breakfast
const BASE_URL_Breakfast =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random";

const optionsForBreakfast = {
  url: BASE_URL_Breakfast,
  params: {
    tags: "breakfast",
    number: "5",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPIBreakfast = async () => {
  const { data } = await axios.get(
    `${BASE_URL_Breakfast}`,
    optionsForBreakfast
  );
  return data;
};
// Lunch
const BASE_URL_Lunch =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random";

const optionsForLunch = {
  url: BASE_URL_Lunch,
  params: {
    tags: "side dish",
    number: "5",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPILunch = async () => {
  const { data } = await axios.get(`${BASE_URL_Lunch}`, optionsForLunch);
  return data;
};

// Dinner
const BASE_URL_Dinner =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random";

const optionsForDinner = {
  url: BASE_URL_Dinner,
  params: {
    tags: "dinner",
    number: "5",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPIDinner = async () => {
  const { data } = await axios.get(`${BASE_URL_Dinner}`, optionsForDinner);
  return data;
};

// Instructions Page

// Call by ID For Instructions Comp

const BASE_URL_GetAnalyzedRecipeInstructions =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/";

const optionsGetAnalyzedRecipeInstructions = {
  url: BASE_URL_GetAnalyzedRecipeInstructions,
  params: {
    // IdNumber Needed For rest of Link = {324694}/analyzedInstructions
    // Need to create a state that carries the name for the dish
    stepBreakdown: true,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPIoptionsGetAnalyzedRecipeInstructions = async (url) => {
  const { data } = await axios.get(
    `${BASE_URL_GetAnalyzedRecipeInstructions}/${url}`,
    optionsGetAnalyzedRecipeInstructions
  );
  return data;
};
