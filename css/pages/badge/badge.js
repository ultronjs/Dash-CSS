var button_toogle = document.querySelector(".badge_button_toggle");

const toggleBadge = (event) => {
  var badge = document.querySelector(".badge_toggle");
  badge.classList.toggle("hide");
};

button_toogle.addEventListener("click", toggleBadge);
