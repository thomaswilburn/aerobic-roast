require("./swipe");

require("./thomas");
require("./audrey");

setTimeout(function() {
  document.body.classList.add("ready");
}, 100);

var video = document.querySelector("video");
var cover = document.querySelector(".page.cover");
var yay = document.querySelector(".page.clams");

var turn = function(back) {
  var next;
  if (back) {
    next = document.querySelector(".page:not(.turned)").previousElementSibling;
  } else {
    next = document.querySelector(".page:not(.turned):not(:last-child)");
  }
  if (!next || !next.classList.contains("page")) return;
  next.classList.toggle("turned");
  if (cover.classList.contains("turned") && !yay.classList.contains("turned")) {
    //move from cover to video
    video.play();
  } else {
    video.pause();
  }
};

document.body.addEventListener("swipe", function(e) {
  turn(e.detail.direction == "right");
});

document.body.addEventListener("keydown", function(e) {
  switch (e.keyCode) {
    case 37:
      turn(true);
      break;
      
    case 32:
    case 39:
    case 40:
      turn();
  }
});