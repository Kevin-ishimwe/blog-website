const hov_nav = document.getElementById("nav_li_special");
const drop_down = document.querySelectorAll(".hover1");
const menu_btn = document.getElementById("bars");
const menu_items_cont = document.querySelectorAll("#nav_ul");
//is for hover mouse
hov_nav.onmouseenter = function () {
  drop_down[0].style.display = "flex";
};
//for when mouse leaves

hov_nav.onmouseleave = function () {
  drop_down[0].style.display = "none";
};
//this is for menu button
var count = 0;
menu_btn.addEventListener("click", function () {
  count = count + 1;
  if (count % 2 != 0) {
    menu_btn.style.transform = "rotate(90deg)";
    menu_items_cont[0].style.display = "flex";
    menu_btn.style.backgroundColor = "azure";
    menu_btn.style.color = " #0c4278";
  } else {
    menu_items_cont[0].style.display = "none";
    menu_btn.style.transform = "rotate(0deg)";
    menu_btn.style.backgroundColor = "inherit";
    menu_btn.style.color = " azure";
  }
});
