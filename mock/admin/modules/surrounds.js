const Mock = require("mockjs");
const { Random } = Mock;

const reqSurroundList = {
  url:'/atm/find/all',
  type: "post",
  response: (options) => {

    console.log(options);
    let surrounds = [];
    const num = Random.natural(10, 20);
    for (let index = 0; index < num; index++) {
      surrounds.push({
        id: Random.id(),
        atmName: Random.ctitle(5, 8),
        atmDetail: Random.csentence(20, 50),
        createBy: Random.cname(),
        createTime: Random.date('yyyy-MM-dd')
      })      
    }

    return {
      status: 200,
      msg: "ok",
      surrounds
    };
  },
};

module.exports = [
  reqSurroundList
];
