var statik = require('statik');
var server = statik.createServer();
var port = process.env.PORT || 3000;
server.listen(port);
console.log('Server online at: http://localhost:%d', port);
