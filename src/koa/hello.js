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



