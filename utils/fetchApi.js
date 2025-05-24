import axios from "axios";

export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      },
    });
    return data;
  } catch (error) {
    console.error("API request failed:", error.message);
    throw new Error("Unable to fetch data from API.");
  }
};
