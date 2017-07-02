var Engine = require('../src/main.js');
var engine = new Engine('stockfish');
engine.runProcess().then(function () {
    return engine.command('uci');
}).then(function (data) {
    console.log(data);
    return engine.command('isready');
}).then(function (data) {
    console.log(data);
}).done();
