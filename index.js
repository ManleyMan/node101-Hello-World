const http = require('http');

const server = http.createServer((req,res) =>{
    console.log('Recieved' + req.method + 'request for' + req.url);

//send headers
    res.writeHead(200, {"Content-Type" : 'text/plain'});

// send body response
    res.end("Hello World");
});

// add listener
server.listen(8080,'localhost', null, function(){
    console.log("server is listening on localhost:8080");
});
