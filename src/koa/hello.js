const Koa = require('koa');
const app = new Koa();

app.use(async (ctx,next)=>{
    await next();
    // console.log((new Date()).toLocaleString());
    console.log(ctx);

    console.log('========');
    console.log(next);
    ctx.body = 'hello world';
    console.log(ctx.body === ctx.response.body); //true
});


app.listen(3000);


// function getTel(){
//     var tel_title = ['131','132','133','134','135','136','137','158','159'];
//     tel = tel_title[parseInt(Math.random() *10)];
//     tel = isNaN(tel) ? '189':tel;
//     for(var i=0 ;i<8;i++){
//         var tmp_num = Math.floor(Math.random()*10) ;
//         tel += tmp_num;
//     }  
//     return tel;
// }

// var tempInfos = [];
// for(var j=0 ; j<100;j++){
//     var data = {
//         name :'name_test'+Math.floor(Math.random()*100),
//         tel  : getTel()
//     };
//     tempInfos.push(data);
// }

// db.test.insert(tempInfos);
// document={title: 'MongoDB 教程', 
//     description: 'MongoDB 是一个 Nosql 数据库',
//     by: '菜鸟教程',
//     url: 'http://www.runoob.com',
//     tags: ['mongodb', 'database', 'NoSQL'],
//     likes: 100
// };

// db.hello.insert(document);