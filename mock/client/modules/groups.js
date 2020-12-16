const Mock = require("mockjs");

const { Random } = Mock;

const reqGroups = {
  url: "/req_grops",
  type: "get",
  response: () => {

    const num = Random.natural(7, 9);
    const groups = [];

    for (let index = 0; index < num; index++) {
      groups.push({
        id: Random.id(),
        title: `${Random.ctitle(4, 5)}组`,
        url: Random.image( '213x150', '#bfa' ),
        date: Random.date('yyyy-MM-dd')
      })      
    }

    return {
      status: 200,
      msg: "ok",
      groups
    };
  },
};

const reqGroupsInfo = {
  url: /\/req_grops\/info\?.*/,
  type: "get",
  response: () => {
    
    return {
      status: 200,
      msg: "ok",
      info: {
        id: Random.id(),
        title: `${Random.ctitle(5, 7)}组`,
        content: Random.cparagraph(20, 30),
        members: Random.natural(5, 8),
        leader: Random.cname(),
        date: Random.date('yyyy-MM-dd')
      }
    };
  },
};

module.exports = [
  reqGroups,
  reqGroupsInfo
];
