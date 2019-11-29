'use strict';

// console.log('hello world!');
var fs = require('fs');

var file_name = 'g:\\vue\\shop\\src\\App.vue';

/** 异步读取文件信息 **/
// fs.readFile(file_name,'utf-8',function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('异步读取：');
//         console.log(data);
//     }
// });


/** 同步读取文件信息 ,错误信息的捕获 try ... catch */
// try{
//     var data = fs.readFileSync(file_name,'utf-8');
//     console.log('同步读取：');
//     console.log(data);
// }catch(e){
//     console.log(e);
// }


/**异步写入文件 */
// console.log('异步写入中:');
// fs.writeFile('test.txt','异步写入:node.js',function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('异步写入 done');
//     }
// });

/** 同步写入 */
// fs.writeFileSync('sync.txt','同步写入');


/**文件信息 */

//同步读取
// var file_status = fs.statSync('test.txt');
// console.log(file_status.birthtime);

//异步读取
// fs.stat('test.txt',function(err,status){
//    if(err){
//        console.log(err);
//    }else{
//        console.log('是否文件：'+status.isFile());
//        console.log('是否文件目录：'+status.isDirectory());
//        console.log('文件修改时间：'+status.mtime);
//        console.log('文件大小：'+status.size);
//    }
// });

// console.log(fs);


// var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
// ws1.write(fs.readFileSync(file_name,'utf-8'));
// ws1.write('END.');
// ws1.end();


//文件复制
// var wr = fs.createReadStream(file_name);
// var ws = fs.createWriteStream('outfile3.txt');
// wr.pipe(ws);

// var http = require('http');
// var server = http.createServer(function(request,response){
//     console.log(request.method+':'+request.url);
//     response.writeHead(200,{'Content-Type':'text/html'});
//     response.end('<h1>欢迎使用node.js</h1>');
    
// });

// server.listen(9999);
// console.log('Server is running at http://localhost:9999/');

// var path = require('path');
// console.log(path.resolve('.')); //g:\vue\shop


/** crypto 加密 安全模块 */

var crypto = require('crypto');

//md5 加密
var hash = crypto.createHash('md5');
hash.update('Hello, world!');
hash.update('Hello, nodejs!');
console.log('md5 :'+hash.digest('hex'));

//sha 加密
var sha = crypto.createHash('sha1');
sha.update('Hello, world!');
sha.update('Hello, nodejs!');
console.log('sha1：'+sha.digest('hex'));