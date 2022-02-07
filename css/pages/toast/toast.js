var toggleBaseline = document.querySelector(".toggle_baseline");
var toggleLeading = document.querySelector(".toggle_leading"); 
var baselineToast = document.querySelector(".toast_baseline"); 
var leadingToast = document.querySelector(".toast_leading"); 

const toggleHideForBaseline = () => {
    baselineToast.classList.remove("hide");
    setTimeout(()=>{
        baselineToast.classList.add("hide");
    },3000)
}

const toggleHideForLeading = () => {
    leadingToast.classList.remove("hide");
    setTimeout(() => {
        leadingToast.classList.add("hide");
    }, 3000);
};

toggleBaseline.addEventListener('click',toggleHideForBaseline);
toggleLeading.addEventListener("click", toggleHideForLeading);