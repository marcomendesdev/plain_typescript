import { apiResponse } from "./types/types";

let isModalOpen = false;

export function openModal(data: apiResponse[0]) {
    if (!data) {
        console.error('Data is undefined');
        return;
    }

    const modal = document.getElementById('pokemon-modal')!;
    const modalName = document.getElementById('pokemon-modal-name')!;
    const modalImage = document.getElementById('pokemon-modal-image') as HTMLImageElement;
    const modalHeight = document.getElementById('pokemon-modal-height')!;
    const modalWeight = document.getElementById('pokemon-modal-weight')!;
    const closeModalButton = document.getElementById('pokemon-modal-close')!;

    modalName.textContent = data.name;
    modalImage.src = data.image;
    modalHeight.textContent = `Height: ${data.height}`;
    modalWeight.textContent = `Weight: ${data.weight}`;

    modal.style.display = 'block';
    isModalOpen = true;

    const newCloseButton = closeModalButton.cloneNode(true);
    closeModalButton.parentNode!.replaceChild(newCloseButton, closeModalButton);

    newCloseButton.addEventListener('click', () => {
        closeModal();
    });
}

export function closeModal() {
    const modal = document.getElementById('pokemon-modal')!;
    modal.style.display = 'none';
    isModalOpen = false;
}

export function isModalOpenFunc() {
    return isModalOpen;
}