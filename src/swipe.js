//enables swipe events dispatched from the body
var touchTracking = {
  pointers: {}
};

document.body.addEventListener("touchstart", function(e) {
  var pointers = touchTracking.pointers;
  for (var i = 0; i < e.touches.length; i++) {
    var touch = e.touches[i];
    pointers[touch.identifier] = touch;
  }
});

document.body.addEventListener("touchend", function(e) {
  var pointers = touchTracking.pointers;
  var touches = e.changedTouches;
  for (var i = 0; i < touches.length; i++) {
    var touch = touches[i];
    var previous = pointers[touch.identifier];
    if (!previous) return;
    pointers[touch.identifier] = null;
    var dx = touch.clientX - previous.clientX;
    var dy = touch.clientY - previous.clientY;
    if (Math.abs(dy) > 100) return; //reject non-horizontal swipes
    var distance = Math.abs(dx);
    if (distance > 100) {
      //swipe occurred!
      var detail = { direction: "left" };
      if (dx > 0) {
        //swipe left-to-right
        detail.direction = "right";
      }
      var event = new CustomEvent("swipe", { detail: detail });
      document.body.dispatchEvent(event);
    }
  }
});