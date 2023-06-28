import axios from "axios";

// Video Search

const BASE_URL_VideoSearch =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/videos/search";

const optionsForVideoSearch = {
  url: BASE_URL_VideoSearch,
  params: {
    type: "main course ",
    cuisine: "vietnamese",
    number: "5",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPIVideoSearch = async () => {
  const { data } = await axios.get(
    `${BASE_URL_VideoSearch}`,
    optionsForVideoSearch
  );
  return data;
};

const optionsForVideo = {
  url: BASE_URL_VideoSearch,
  params: {
    type: "main course ",
    cuisine: "asian",
    number: "12",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

export const fetchFromAPIVideo = async () => {
  const { data } = await axios.get(`${BASE_URL_VideoSearch}`, optionsForVideo);
  return data;
};
