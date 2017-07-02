var Engine = require('../src/main.js');
var engine = new Engine('stockfish');
engine.runProcess().then(function () {
    console.log('Started');
    return engine.uciCommand();
}).then(function (idAndOptions) {
    console.log('Engine name - ' + idAndOptions.id.name);
    return engine.command('isready');
}).then(function (data) {
    console.log(data);
}).done();
