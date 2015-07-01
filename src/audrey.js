var _ = require("lodash");
var templateText = document.querySelector("script#road-template").innerHTML;
var template = _.template(templateText);

var trafficData = [
  { 
    route: "Seattle-New Haven"
  },
  { 
    route: "Camano Island-Ephrata"
  },
  { 
    route: "Poulsbo-Aeneas"
  },
  { 
    route: "Skamokawa-Spokane"
  },
  { 
    route: "Steilacoom-Enumclaw"
  }
];

var randomNumber = function() {
  var num = Math.round((Math.random() * 100));
  if (num % 6 == 0) { num = null };
  return num;
}

var randomRGB = function() {
  return Math.round((Math.random() * 255));
}

var randomColor = function(route, type) {
  var h = Math.round((Math.random() * 120));
  return "hsl(" + h + ",70%,50%)";
}

var colorTraffic = function() {
  trafficData.forEach(function(route) {
    route.regular = randomNumber();
    route.hov = randomNumber();
    route.express = randomNumber();
    route.regularcolor = route.regular ? randomColor(route, "regular") : "#DDD";
    route.hovcolor = route.hov ? randomColor(route, "hov") : "#DDD";
    route.expresscolor = route.express ? randomColor(route, "express") : "#DDD";
  })

  document.querySelector("#trafficContainer").innerHTML = template({ trafficData: trafficData });
}

colorTraffic();

setInterval(function(){
  colorTraffic();
},2000);


