const MOCKURL = 'http://www.abc.com/';
const SERVERURL = 'http://localhost:3000/';

const  URL = {
    //mock数据
    getVarietyGoods : MOCKURL + 'getVarietyGoods',
    getHotgoods : MOCKURL + 'getHotgoods',
    getCategoryGoods : MOCKURL + 'getCategoryGoods',
   
    //生产环境
    userAdd : SERVERURL + 'user/add',
    userRegister : SERVERURL + 'user/register',
}


export default URL;