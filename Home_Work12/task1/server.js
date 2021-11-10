let http = require('http');
let moment = require('moment');
let date = moment().toString();
http.createServer(function (request, response) {
   response.writeHead(200, {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
   });
   response.end(date);
}).listen(5000);