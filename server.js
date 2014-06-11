var statik = require('statik');
var port = process.env.PORT || 3000;
var server = statik({
	port: port
});
console.log('Server online at: http://localhost:%d', port);
