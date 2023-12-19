type apiResponse = {
  name: string;
  image: string;
  weight: number;
  height: number;
}[];

type cacheResponse = apiResponse | undefined;

interface Result {
  url: string;
}

export type { apiResponse, cacheResponse, Result };
