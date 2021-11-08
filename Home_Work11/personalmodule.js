/*****************************Task 2******************************************/

let http = require('http');
let moment = require('moment');
let date = moment().toString();
let hour = Number(moment().format('H'));
let os = require('os');

http.createServer(function (request, response) {
   response.writeHead(200, { 'Content-Type': 'text/plain' });
   response.write('Date of request: ' + date + '\n');

   let myHour = (hour >= 23) ? 'Good night, ' :
      (hour < 5) ? 'Good night, ' :
         (hour >= 5 && hour < 11) ? 'Good morning, ' :
            (hour >= 11 && hour < 17) ? 'Good afternoon, ' :
               (hour >= 17 && hour < 23) ? 'Good evening, ' : 'Incorrect';

   response.write(myHour + os.userInfo().username + '\n');
   response.end();

}).listen(8000);
