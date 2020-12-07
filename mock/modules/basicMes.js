const Mock = require("mockjs");

const { Random } = Mock;

const reqRegulations = {
  url: "/get_basic_mes/regulation",
  type: "get",
  response: () => {
    
    const num = Random.natural(3, 4);
    const data = []

    for (let index = 0; index < num; index++) {
      data.push({
        id: Random.id(),
        content: Random.ctitle(5, 8),
      })
    }

    return {
      status: 200,
      msg: "ok",
      regulations: data
    };
  },
};

const reqResource = {
  url: "/get_basic_mes/resource",
  type: "get",
  response: () => {
    
    const num = Random.natural(3, 4);
    const data = []

    for (let index = 0; index < num; index++) {
      data.push({
        id: Random.id(),
        name: Random.ctitle(5, 8),
        content: Random.csentence(100)
      })
    }

    return {
      status: 200,
      msg: "ok",
      resource: data
    };
  },
};

module.exports = [
  reqRegulations,
  reqResource
];
