'use strict';

var fs   = require('fs');
var path = require('path');
var http = require('http');
var url  = require('url');

var root = path.resolve(process.argv[2] || '.');
console.log('root dir :'+root);

var server = http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname;

    var filepath = path.join(root,pathname);

    fs.stat(filepath,function(err,status){
        if(!err && status.isFile()){
            console.log('200'+request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else{
            
            response.writeHead(404);
            response.end('404 not found!')
            console.log(err);
        }
    });
});

server.listen(9999);
console.log('server is running at http://localhost:9999/');
