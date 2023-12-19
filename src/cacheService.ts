import { cacheResponse } from "./types/types";

const compareCacheToApi = async (data: cacheResponse, cacheName: string) => {
  const cachedData = await getFromCache(cacheName);

  if (JSON.stringify(data) !== JSON.stringify(cachedData)) {
    await addToCache(data, cacheName);
  }
};

const addToCache = async (data: cacheResponse, cacheName: string) => {
  const cache = await caches.open(cacheName);
  await cache.put(cacheName, new Response(JSON.stringify(data)));
};

const getFromCache = async (cacheName: string) => {
  const cache = await caches.open(cacheName);
  const response = await cache.match(cacheName);
  if (response) {
    const data = await response.json();
    return data;
  }
  return null;
};

export { compareCacheToApi, addToCache, getFromCache };
