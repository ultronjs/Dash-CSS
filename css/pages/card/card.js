var btn_dismiss = document.querySelector(".card_dismiss");

const removeCard = () => {
    console.log("i am working")
    var cardToDismiss = document.querySelector(".card_with_dismiss");
    console.log(cardToDismiss)
    cardToDismiss.classList.add("hide")
}



btn_dismiss.addEventListener("click",removeCard);