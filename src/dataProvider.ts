import { compareCacheToApi, getFromCache } from "./cacheService";
import fetchApi from "./apiService";
import { cacheResponse } from "./types/types";

const dataProvider = async (): Promise<cacheResponse> => {
  const cacheName = "api-cache";
  const apiData = await fetchApi();
  await compareCacheToApi(apiData, cacheName);
  const cachedData = await getFromCache(cacheName);

  console.log("Cached Data:", cachedData);

  return cachedData;
};

export default dataProvider;
