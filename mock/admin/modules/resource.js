const Mock = require("mockjs");

const { Random } = Mock;

const reqResource = {
  url: '/res/find/all',
  type: "post",
  response: () => {
    
    const num = Random.natural(5, 7);
    const resource = []

    for (let index = 0; index < num; index++) {
      resource.push({
        id: Random.id(),
        resName: Random.ctitle(5, 8),
        resDetail: Random.cparagraph(20, 30),
      })
    }

    return {
      status: 200,
      msg: "ok",
      resource
    };
  },
};

module.exports = [
  reqResource,
];
