var inventory;
var lookup = {};

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "../data/pops.json", true);
oReq.send();

function reqListener(e) {
  inventory = JSON.parse(this.responseText);
  updateDisplay();
}

function updateDisplay() {
  var display = "<ul>";
  for (i = 0; i < inventory.pops.length; i++) {
    display += "<li><button class='buy' type='" +
      inventory.pops[i].name +
      "'>buy</button>" + inventory.pops[i].name + "</li>";
  }
  display += "</ul>";
  document.getElementById("display").innerHTML = display;
}

function popSold(type) {
  var pop = inventory.pops.filter(function(pop) {
    return pop.name == type;
  });
  pop = pop[0];
  if(pop.quantity<1) {
    alert("out of " + pop.name + " change returned");
    return;
  }
  pop.quantity--;
  console.log(pop.quantity + " " + pop.name + " left");
  saveInventory();
}

function saveInventory() {
  var fs = require('fs');
  fs.writeFile('data/pops.json', JSON.stringify(inventory), function(err) {
   if(err) return console.log(err);
  });
}

function refill() {
  for (i = 0; i < inventory.pops.length; i++) {
    inventory.pops[i].quantity = 50;
  } 
  saveInventory();
}

// On buy button clicked
document.onclick = function(event) {
  var el = event.target;
  if (el.className == "buy") popSold(el.getAttribute("type"));
}

