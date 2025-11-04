

const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector(".close-button");
const modalContent = document.querySelector("#modal");


function openModal() {
    console.log("modal opened!");
    modalContent.classList.toggle("open");
    modalContent.setAttribute("aria-hidden", false);
}

function closeModal() {
    console.log("modal closed");
    modalContent.classList.remove("open");
    modalContent.setAttribute("aria-hidden", true);
}


openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);



window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
window.addEventListener("click", function (event) {
    if (event.target === modalContent) {
        closeModal();
    }
});
