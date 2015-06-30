(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXVkcmV5LmpzIiwic3JjL3NjcmlwdC5qcyIsInNyYy9zd2lwZS5qcyIsInNyYy90aG9tYXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIixudWxsLCJyZXF1aXJlKFwiLi9zd2lwZVwiKTtcblxucmVxdWlyZShcIi4vdGhvbWFzXCIpO1xucmVxdWlyZShcIi4vYXVkcmV5XCIpO1xuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UuY292ZXJcIikuY2xhc3NMaXN0LmFkZChcInR1cm5lZFwiKTtcbn0sIDUwMCk7XG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcInN3aXBlXCIsIGZ1bmN0aW9uKGUpIHtcbiAgdmFyIG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2U6bm90KC50dXJuZWQpXCIpO1xuICBpZiAoZS5kZXRhaWwuZGlyZWN0aW9uID09IFwicmlnaHRcIikge1xuICAgIG5leHQgPSBuZXh0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIH1cbiAgaWYgKCFuZXh0IHx8ICFuZXh0LmNsYXNzTGlzdC5jb250YWlucyhcInBhZ2VcIikpIHJldHVybjtcbiAgbmV4dC5jbGFzc0xpc3QudG9nZ2xlKFwidHVybmVkXCIpO1xufSk7IiwiLy9lbmFibGVzIHN3aXBlIGV2ZW50cyBkaXNwYXRjaGVkIGZyb20gdGhlIGJvZHlcbnZhciB0b3VjaFRyYWNraW5nID0ge1xuICBwb2ludGVyczoge31cbn07XG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24oZSkge1xuICB2YXIgcG9pbnRlcnMgPSB0b3VjaFRyYWNraW5nLnBvaW50ZXJzO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGUudG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b3VjaCA9IGUudG91Y2hlc1tpXTtcbiAgICBwb2ludGVyc1t0b3VjaC5pZGVudGlmaWVyXSA9IHRvdWNoO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24oZSkge1xuICB2YXIgcG9pbnRlcnMgPSB0b3VjaFRyYWNraW5nLnBvaW50ZXJzO1xuICB2YXIgdG91Y2hlcyA9IGUuY2hhbmdlZFRvdWNoZXM7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b3VjaCA9IHRvdWNoZXNbaV07XG4gICAgdmFyIHByZXZpb3VzID0gcG9pbnRlcnNbdG91Y2guaWRlbnRpZmllcl07XG4gICAgaWYgKCFwcmV2aW91cykgcmV0dXJuO1xuICAgIHBvaW50ZXJzW3RvdWNoLmlkZW50aWZpZXJdID0gbnVsbDtcbiAgICB2YXIgZHggPSB0b3VjaC5jbGllbnRYIC0gcHJldmlvdXMuY2xpZW50WDtcbiAgICB2YXIgZHkgPSB0b3VjaC5jbGllbnRZIC0gcHJldmlvdXMuY2xpZW50WTtcbiAgICBpZiAoTWF0aC5hYnMoZHkpID4gMTAwKSByZXR1cm47IC8vcmVqZWN0IG5vbi1ob3Jpem9udGFsIHN3aXBlc1xuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKGR4KTtcbiAgICBpZiAoZGlzdGFuY2UgPiAxNTApIHtcbiAgICAgIC8vc3dpcGUgb2NjdXJyZWQhXG4gICAgICB2YXIgZGV0YWlsID0geyBkaXJlY3Rpb246IFwibGVmdFwiIH07XG4gICAgICBpZiAoZHggPiAwKSB7XG4gICAgICAgIC8vc3dpcGUgbGVmdC10by1yaWdodFxuICAgICAgICBkZXRhaWwuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgfVxuICAgICAgdmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KFwic3dpcGVcIiwgeyBkZXRhaWw6IGRldGFpbCB9KTtcbiAgICAgIGRvY3VtZW50LmJvZHkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuICB9XG59KTsiLCJjb25zb2xlLmxvZyhcImhlbGxvXCIpOyJdfQ==
