/*******************Task 1**************************************************************/

let http = require('http');
let os = require('os');
let path = require('path');
http.createServer(function (request, response) {
   response.writeHead(200, { 'Content-Type': 'text/plain' });
   response.write('System information\n');
   response.write('Current user name: ' + os.userInfo().username + '\n');
   response.write('OS type: ' + os.type() + '\n');
   response.write('System work time: ' + (os.uptime() / 60) + '\n');
   response.write('Current work directory: ' + path.dirname(process.cwd()) + '\n');
   response.write('Server file name: ' + path.basename(__filename) + '\n');
   response.end();
}).listen(5000);




