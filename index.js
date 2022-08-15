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
    menu_btn.style.color = " #d94500";
  } else {
    menu_items_cont[0].style.display = "none";
    menu_btn.style.transform = "rotate(0deg)";
    menu_btn.style.backgroundColor = "inherit";
    menu_btn.style.color = " azure";
  }
});
//image slider code
const slide_container = document.getElementsByClassName("image_slider");
const slide = document.getElementById("slide");
const slide_text = document.getElementById("slide_text");
let i = 0;
function changeImg() {
  const slde_width = slide.clientWidth;
  if (i == 6) {
    i = 0;
  }
  if (i < 3) {
    slide_container[0].scrollLeft += slde_width;
    console.log("left");
  } else if (i >= 3) {
    slide_container[0].scrollLeft -= slde_width;
    console.log("right");
  }
  console.log(i);
  i++;
}

setInterval("changeImg()", 3000);
