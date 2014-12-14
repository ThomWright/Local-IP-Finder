var http = require('http');

for (var i = 2; i <= 255; i++) {
  (function sendRequest() {
    var ip = '192.168.0.'+i;

    http.get({host: ip, port: 80}, function(res) {
      if (res.statusCode == 401 || res.statusCode == 200) {
        console.log('IP:' + ip);
        process.exit(); // assume only one matching IP
      }
    }).on('error', function(e) {/* ignore */});
  })();
};
