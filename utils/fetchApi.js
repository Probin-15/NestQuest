import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'b1731cfa19msh718f55a459429ebp1b86c7jsn226fc10dc8f0' ,
    },
  });
    
  return data;
}