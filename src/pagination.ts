import { cacheResponse } from "./types/types";

let currentPage = 1;
let itemsPerPage = 20;
let totalPages: number;

const pagination = async (data: cacheResponse) => {
  if (!data) {
    return {
      currentPage: 1,
      totalPages: 0,
      limitPerPage: itemsPerPage,
      items: [],
    };
  }

  const totalItems = data.length;
  totalPages = Math.ceil(totalItems / itemsPerPage);
  const offset = (currentPage - 1) * itemsPerPage;
  const paginatedItems = data.slice(offset, offset + itemsPerPage);

  return {
    currentPage,
    totalPages,
    limitPerPage: itemsPerPage,
    items: paginatedItems,
  };
};

const updatePageNumber = () => {
  const pageNumberElement = document.querySelector("#page-number");
  if (pageNumberElement) {
    pageNumberElement.textContent = `page ${currentPage} of ${totalPages}`;
  }
};

const nextPage = (): boolean => {
  if (currentPage < totalPages) {
    currentPage++;
    updatePageNumber();
    return true;
  }
  return false;
};

const prevPage = (): boolean => {
  if (currentPage > 1) {
    currentPage--;
    updatePageNumber();
    return true;
  }
  return false;
};

const setupPaginationButtons = async (render: Function) => {
  const nextBtn = document.querySelector("#next-page") as HTMLButtonElement;
  const prevBtn = document.querySelector("#prev-page") as HTMLButtonElement;

  const updateButtonStatus = () => {
    if (nextBtn && prevBtn) {
      nextBtn.disabled = currentPage === totalPages;
      prevBtn.disabled = currentPage === 1;
    }
  };

  prevBtn?.addEventListener("click", async () => {
    if (prevPage()) {
      await render();
    }
    updateButtonStatus();
  });

  nextBtn?.addEventListener("click", async () => {
    if (nextPage()) {
      await render();
    }
    updateButtonStatus();
  });

  document.addEventListener("keydown", async (event) => {
    if (event.key === "ArrowLeft") {
      prevPage();
      await render();
      updateButtonStatus();
    } else if (event.key === "ArrowRight") {
      nextPage();
      await render();
      updateButtonStatus();
    }
  });
  updateButtonStatus();
};

export { pagination, setupPaginationButtons };
