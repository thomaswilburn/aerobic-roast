var canvas = document.querySelector("canvas.prints");
var context = canvas.getContext("2d");

var onResize = function() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
};

window.addEventListener("resize", onResize);
onResize();

var print = new Image();
print.src = "./print.png";

var placePrint = function(x, y) {
  var pWidth = 80;
  var pHeight = 100;
  context.globalAlpha = .2;
  context.drawImage(print, x - pWidth / 2, y - pHeight / 2, pWidth, pHeight);
}

document.querySelector(".page.thomas").addEventListener("touchstart", function(e) {
  var bounds = canvas.getBoundingClientRect();
  var touch = e.touches[0];
  var x = touch.pageX - bounds.left;
  var y = touch.pageY - bounds.top;
  placePrint(x, y);
});