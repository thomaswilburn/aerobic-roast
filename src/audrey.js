var _ = require("lodash");
var templateText = document.querySelector("script#road-template").innerHTML;
var template = _.template(templateText);

var trafficData = [
  { 
    route: "Seattle-New Haven"
  },
  { 
    route: "Aeneas-Spokane"
  },
  { 
    route: "Camano Island-Ephrata"
  },
  { 
    route: "Enumclaw-Steilacoom"
  },
  { 
    route: "Ephrata-Camano Island"
  },
  { 
    route: "New Haven-Seattle"
  },
  { 
    route: "Poulsbo-Skamokawa"
  },
  { 
    route: "Skamokawa-Poulsbo"
  },
  { 
    route: "Spokane-Aeneas"
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

var randomColor = function() {
  return Math.round((Math.random() * 225));
}

trafficData.forEach(function(route) {
  route.regular = randomNumber();
  route.hov = randomNumber();
  route.express = randomNumber();
  route.regularcolor = "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
  route.hovcolor = "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
  route.expresscolor = "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
})

document.querySelector("#trafficContainer").innerHTML = template({ trafficData: trafficData });


