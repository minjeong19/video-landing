const snbBtn = document.querySelector(".btn_menu");
const subMenu = document.querySelector(".sub-menu");

snbBtn.addEventListener("click", function () {
  if (subMenu.classList.contains("hide")) {
    subMenu.classList.remove("hide");
  } else {
    subMenu.classList.add("hide");
  }
});
