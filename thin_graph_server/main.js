var http = require("http");
var R = require("request");

var app_id = "576756659081990";
var app_secret = "2ccadfab57ee4c235a127f2718d25f6b";

http.createServer(function(request, response) {
    var page = "https://graph.facebook.com"+request.url;
    if (page.indexOf("?") == -1) {
        page+="?";
    }
    R(page+"&access_token="+app_id+"|"+app_secret, function(err, res, body) {
            response.writeHead(200, {"Content-Type": "application/json"});
            response.write(body);
            response.end();
    });    
}).listen(8888);
