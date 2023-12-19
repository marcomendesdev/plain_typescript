import { openModal, closeModal, isModalOpenFunc as isModalOpen } from "./modal";
import { cacheResponse } from "./types/types";

const renderList = async (data?: cacheResponse) => {
  if (data && data.length > 0) {
    const ul = document.createElement("ul");
    ul.id = "ul-list";

    for (const list of data) {
      const li = document.createElement("li");
      li.tabIndex = 0;
      li.addEventListener("click", () => {
        openModal(list);
      });
      li.addEventListener("keydown", (event) => {
        if (event.key === 'Enter') {
          if (isModalOpen()) {
            closeModal();
          } else {
            openModal(list);
          }
        } else if (event.key === 'ArrowDown') {
          const nextLi = li.nextElementSibling || ul.firstElementChild;
          (nextLi as HTMLElement).focus();
        } else if (event.key === 'ArrowUp') {
          const prevLi = li.previousElementSibling || ul.lastElementChild;
          (prevLi as HTMLElement).focus();
        }
      });
      li.innerHTML = `<img src="${list.image}" alt="${list.name}" />
      <h2>${list.name}</h2>`;
      ul.appendChild(li);
    }

    const oldUl = document.getElementById("loading");
    const ulId = document.getElementById("ul-list");
    if (oldUl) {
      oldUl.replaceWith(ul);
    } else if (ulId) {
      ulId.replaceWith(ul);
    }
  }
};

export default renderList;