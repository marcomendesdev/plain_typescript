import "./style.css";
import renderApp from "./renderApp";
import dataProvider from "./dataProvider";
import renderList from "./renderList";
import { pagination, setupPaginationButtons } from "./pagination";
import { cacheResponse } from "./types/types";
import search from "./search";

renderApp();

let appDataList: cacheResponse = [];

async function appData() {
  const data = await dataProvider();
  appDataList = data;
}

await appData();

async function paginationData() {
  const paginatedData = await pagination(appDataList);
  console.log("Paginated Data:", paginatedData.items);
  return paginatedData.items;
}

async function render() {
  const data = await paginationData();
  renderList(data);
}

render();

setupPaginationButtons(render);

const searchInput = document.querySelector("#search");
if (searchInput) {
  searchInput.addEventListener("input", async (event) => {
    const query = (event.target as HTMLInputElement).value;
    if (appDataList && Array.isArray(appDataList)) {
      const results = search(appDataList, query, "name");
      renderList(results);
    }
  });
}


