var cancelMoalBtn = document.querySelector(".modal_cancel_btn");
var modalDismiss = document.querySelector(".modal_dismiss");
var modal = document.querySelector(".modal_bg");
var toggleButton = document.querySelector(".toggle_modal");

console.log(modal.classList.contains("hide"));

const openModal = () => {
    console.log("i am working")
    modal.classList.remove("hide");
};
const closeModal = () => {
    console.log("i am triggered")
    modal.classList.add("hide");
}
document.addEventListener(
  "click",
   event => {
    // If user either clicks X button OR clicks on cancel button, then close modal by calling closeModal()
    if (
      event.target.matches(".modal_cancel_btn") ||
        event.target.matches(".modal_dismiss")
    ) {
      closeModal();
    }
  });
toggleButton.addEventListener("click",openModal)

