var Engine = require('uci');
var engine = new Engine('<path to engine executable>');
engine.runProcess().then(function () {
    console.log('Started');
    return engine.uciCommand();
}).then(function (idAndOptions) {
    console.log('Engine name - ' + idAndOptions.id.name);
    return engine.isReadyCommand();
}).then(function () {
    console.log('Ready');
    return engine.uciNewGameCommand();
}).then(function () {
    console.log('New game started');
    return engine.positionCommand('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
}).then(function () {
    console.log('Starting position set');
    return engine.goInfiniteCommand(function infoHandler(info) {
        console.log(info);
    });
    console.log('Starting analysis');
}).delay(2000).then(function () {
    console.log('Stopping analysis');
    return engine.stopCommand();
}).then(function (bestmove) {
    console.log('Bestmove: ');
    console.log(bestmove);
    return engine.quitCommand();
}).then(function () {
    console.log('Stopped');
}).fail(function (error) {
    console.log(error);
    process.exit();
}).done();