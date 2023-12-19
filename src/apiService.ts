import { apiResponse, Result } from "./types/types";

const url = import.meta.env.VITE_API_KEY;

const fetchApi = async (): Promise<apiResponse> => {
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  const apiData: apiResponse = await Promise.all(
    results.map(async (result: Result) => {
      const response = await fetch(result.url);
      const data = await response.json();

      return {
        name: data.name,
        image: data.sprites.other.dream_world.front_default,
        weight: data.weight,
        height: data.height,
      };
    })
  );
  console.log("Api working:", apiData);

  return apiData;
};

export default fetchApi;
