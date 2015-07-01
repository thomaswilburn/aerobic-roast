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

var due = 0;

var update = function() {
  context.fillStyle = "rgba(255, 255, 255, .05)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  if (due > Date.now()) {
    requestAnimationFrame(update);
  } else {
    due = 0;
  }
};

var placePrint = function(x, y) {
  var pWidth = 80;
  var pHeight = 100;
  context.drawImage(print, x - pWidth / 2, y - pHeight / 2, pWidth, pHeight);
  if (!due) requestAnimationFrame(update);
  due = Date.now() + 1000 * 1;
}

document.querySelector(".page.thomas").addEventListener("touchstart", function(e) {
  var bounds = canvas.getBoundingClientRect();
  var touch = e.touches[0];
  var x = touch.pageX - bounds.left;
  var y = touch.pageY - bounds.top;
  placePrint(x, y);
});