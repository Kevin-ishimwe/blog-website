const hov_nav = document.getElementById("nav_li_special");
var drop_down = document.querySelectorAll(".hover1");
//is for hover mouse
hov_nav.onmouseenter = function () {
  drop_down[0].style.display = "flex";
};
//for when mouse leaves

hov_nav.onmouseleave = function () {
  drop_down[0].style.display = "none";
};
