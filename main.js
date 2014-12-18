
var cglobal = require("./hanoi.js");

var game = new cglobal.Hanoi(7);

game.solve();
game.show();