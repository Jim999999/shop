import Mock from 'mockjs';



Mock.mock('http://www.abc.com/getUsers',{
    'info|15':[
        {
            "id|+1":1,  
            "name":"@cname", //名字为随机中文名字
            "age|18-28":25,
            "sex|1":["男","女"],
            "job|1":["web","UI","python","php"],
            "img":Mock.Random.image('120x120'),
        }
    ]
});


//mock随机
var Random = Mock.Random;

//热门商品
var getHotgoods = function(){
    let hotData = [];
    let goods = {};
    for(let i=0;i<10 ; i++){
        goods = {
            name : Random.ctitle(20,35),
            owner : Random.cname(),
            price : Random.float(2000, 10000, 1, 2),
            img : Random.dataImage('125x125','图'+i),
            is_sale : Random.boolean(),
            text : Random.csentence( 100, 1000 ), 
            color : Random.color(), 
            atime : Random.datetime(),  
        };
        hotData.push(goods);
    }
    return hotData;
}
Mock.mock('http://www.abc.com/getHotgoods',getHotgoods);

//推荐商品
var getVarietyGoods = function(){
    let data = [];
    let goods = {};
    for(let i=0;i<50;i++){
        goods = {
            name : Random.ctitle(10,20),
            img : Random.dataImage('125x125','图'+i),
            price : Random.integer(5000,15000),
        };
        data.push(goods);
    }
    return data;
}
Mock.mock('http://www.abc.com/getVarietyGoods',getVarietyGoods);


