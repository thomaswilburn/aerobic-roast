(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
require("./swipe");

require("./thomas");
require("./audrey");

setTimeout(function() {
  document.body.classList.add("ready");
}, 100);

var turn = function(back) {
  var next;
  if (back) {
    next = document.querySelector(".page:not(.turned)").previousElementSibling;
  } else {
    next = document.querySelector(".page:not(.turned):not(:last-child)");
  }
  if (!next || !next.classList.contains("page")) return;
  next.classList.toggle("turned");
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
},{"./audrey":1,"./swipe":3,"./thomas":4}],3:[function(require,module,exports){
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
    if (distance > 150) {
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
},{}],4:[function(require,module,exports){
console.log("hello");
},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXVkcmV5LmpzIiwic3JjL3NjcmlwdC5qcyIsInNyYy9zd2lwZS5qcyIsInNyYy90aG9tYXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLG51bGwsInJlcXVpcmUoXCIuL3N3aXBlXCIpO1xuXG5yZXF1aXJlKFwiLi90aG9tYXNcIik7XG5yZXF1aXJlKFwiLi9hdWRyZXlcIik7XG5cbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInJlYWR5XCIpO1xufSwgMTAwKTtcblxudmFyIHR1cm4gPSBmdW5jdGlvbihiYWNrKSB7XG4gIHZhciBuZXh0O1xuICBpZiAoYmFjaykge1xuICAgIG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2U6bm90KC50dXJuZWQpXCIpLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIH0gZWxzZSB7XG4gICAgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZTpub3QoLnR1cm5lZCk6bm90KDpsYXN0LWNoaWxkKVwiKTtcbiAgfVxuICBpZiAoIW5leHQgfHwgIW5leHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFnZVwiKSkgcmV0dXJuO1xuICBuZXh0LmNsYXNzTGlzdC50b2dnbGUoXCJ0dXJuZWRcIik7XG59O1xuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJzd2lwZVwiLCBmdW5jdGlvbihlKSB7XG4gIHR1cm4oZS5kZXRhaWwuZGlyZWN0aW9uID09IFwicmlnaHRcIik7XG59KTtcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgY2FzZSAzNzpcbiAgICAgIHR1cm4odHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICAgIFxuICAgIGNhc2UgMzI6XG4gICAgY2FzZSAzOTpcbiAgICBjYXNlIDQwOlxuICAgICAgdHVybigpO1xuICB9XG59KTsiLCIvL2VuYWJsZXMgc3dpcGUgZXZlbnRzIGRpc3BhdGNoZWQgZnJvbSB0aGUgYm9keVxudmFyIHRvdWNoVHJhY2tpbmcgPSB7XG4gIHBvaW50ZXJzOiB7fVxufTtcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbihlKSB7XG4gIHZhciBwb2ludGVycyA9IHRvdWNoVHJhY2tpbmcucG9pbnRlcnM7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZS50b3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRvdWNoID0gZS50b3VjaGVzW2ldO1xuICAgIHBvaW50ZXJzW3RvdWNoLmlkZW50aWZpZXJdID0gdG91Y2g7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbihlKSB7XG4gIHZhciBwb2ludGVycyA9IHRvdWNoVHJhY2tpbmcucG9pbnRlcnM7XG4gIHZhciB0b3VjaGVzID0gZS5jaGFuZ2VkVG91Y2hlcztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRvdWNoID0gdG91Y2hlc1tpXTtcbiAgICB2YXIgcHJldmlvdXMgPSBwb2ludGVyc1t0b3VjaC5pZGVudGlmaWVyXTtcbiAgICBpZiAoIXByZXZpb3VzKSByZXR1cm47XG4gICAgcG9pbnRlcnNbdG91Y2guaWRlbnRpZmllcl0gPSBudWxsO1xuICAgIHZhciBkeCA9IHRvdWNoLmNsaWVudFggLSBwcmV2aW91cy5jbGllbnRYO1xuICAgIHZhciBkeSA9IHRvdWNoLmNsaWVudFkgLSBwcmV2aW91cy5jbGllbnRZO1xuICAgIGlmIChNYXRoLmFicyhkeSkgPiAxMDApIHJldHVybjsgLy9yZWplY3Qgbm9uLWhvcml6b250YWwgc3dpcGVzXG4gICAgdmFyIGRpc3RhbmNlID0gTWF0aC5hYnMoZHgpO1xuICAgIGlmIChkaXN0YW5jZSA+IDE1MCkge1xuICAgICAgLy9zd2lwZSBvY2N1cnJlZCFcbiAgICAgIHZhciBkZXRhaWwgPSB7IGRpcmVjdGlvbjogXCJsZWZ0XCIgfTtcbiAgICAgIGlmIChkeCA+IDApIHtcbiAgICAgICAgLy9zd2lwZSBsZWZ0LXRvLXJpZ2h0XG4gICAgICAgIGRldGFpbC5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgICB9XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoXCJzd2lwZVwiLCB7IGRldGFpbDogZGV0YWlsIH0pO1xuICAgICAgZG9jdW1lbnQuYm9keS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB9XG4gIH1cbn0pOyIsImNvbnNvbGUubG9nKFwiaGVsbG9cIik7Il19
