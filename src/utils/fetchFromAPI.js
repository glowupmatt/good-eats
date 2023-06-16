import axios from "axios";

// Home Page

// Random Recipes

const BASE_URL_BreakfastLunchDinnerSlide =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random";

const optionsForBreakfastLunchDinnerSlide = {
  url: BASE_URL_BreakfastLunchDinnerSlide,
  params: {
    tags: "primal",
    number: "10",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPIBreakfastLunchDinnerSlide = async () => {
  const { data } = await axios.get(
    `${BASE_URL_BreakfastLunchDinnerSlide}`,
    optionsForBreakfastLunchDinnerSlide
  );
  return data;
};

// Video Search

const BASE_URL_VideoSearch =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search";

const optionsForVideoSearch = {
  url: BASE_URL_VideoSearch,
  params: {
    query: "dinner",
    maxLength: "999",
    number: "10",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPIVideoSearch = async (url) => {
  const { data } = await axios.get(
    `${BASE_URL_VideoSearch}/${url}`,
    optionsForVideoSearch
  );
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
