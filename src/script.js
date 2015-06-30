require("./swipe");

require("./thomas");
require("./audrey");

setTimeout(function() {
  document.querySelector(".page.cover").classList.add("turned");
}, 500);

document.body.addEventListener("swipe", function(e) {
  var next = document.querySelector(".page:not(.turned)");
  if (e.detail.direction == "right") {
    next = next.previousElementSibling;
  }
  if (!next || !next.classList.contains("page")) return;
  next.classList.toggle("turned");
});