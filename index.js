const hov_nav = document.getElementById("nav_li_special");
var drop_down = document.querySelectorAll(".hover1");

hov_nav.onmouseover = function () {
  drop_down[0].classList.add("ok");
};
console.log("test");
