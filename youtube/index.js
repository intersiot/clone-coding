const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");

// moreBtn.addEventListener("click", () => {
//   moreBtn.classList.toggle("clicked");
//   title.classList.toggle("clamp");
// });

function titleToggle() {
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
}

function init() {
  moreBtn.addEventListener("click", titleToggle);
}

init();