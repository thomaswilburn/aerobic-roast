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

var randomColor = function() {
  return "rgb(" + randomRGB() + "," + randomRGB() + "," + randomRGB() + ")";
}

var colorTraffic = function() {
  trafficData.forEach(function(route) {
    route.regular = randomNumber();
    route.hov = randomNumber();
    route.express = randomNumber();
    route.regularcolor = route.regular ? randomColor() : "#DDD";
    route.hovcolor = route.hov ? randomColor() : "#DDD";
    route.expresscolor = route.express ? randomColor() : "#DDD";
    route.color = route.reguarl
  })

  document.querySelector("#trafficContainer").innerHTML = template({ trafficData: trafficData });
}

colorTraffic();

setInterval(function(){
  colorTraffic();
},2000);


