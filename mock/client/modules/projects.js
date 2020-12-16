const Mock = require("mockjs");

const { Random } = Mock;

const reqProjs = {
  url: "/get_projs",
  type: "get",
  response: () => {
    const num = Random.natural(4, 5);
    const data = [];

    for (let index = 0; index < num; index++) {
      data.push({
        id: Random.id(),
        title: Random.ctitle(5, 8),
        leader: Random.cname(),
        date: Random.date('yy-MM-dd'),
        posterUrl: Random.image('254x254', '#bfc'),
        content: Random.csentence(200, 250),
      });
    }

    return {
      status: 200,
      msg: "ok",
      projs: data,
    };
  },
};

const reqProjInfo = {
  url: /\/get_projs\/info\?.*/,
  type: "get",
  response: () => {

    return {
      status: 200,
      msg: "ok",
      info: {
        id: Random.id(),
        title: Random.ctitle(5, 8),
        leader: Random.cname(),
        date: Random.date('yy-MM-dd'),
        posterUrl: Random.image('254x254', '#bfc'),
        content: Random.cparagraph(30, 50),
      },
    };
  },
};

const reqProjsRecent = {
  url: "/get_projs/recent",
  type: "get",
  response: () => {
    const data = [];

    for (let index = 0; index < 4; index++) {
      data.push({
        id: Random.id(),
        title: Random.ctitle(5, 8),
        leader: Random.cname(),
        date: Random.date('yy-MM-dd'),
        posterUrl: Random.image('254x254', '#bfc'),
        content: Random.csentence(30, 50),
      });
    }

    return {
      status: 200,
      msg: "ok",
      projs: data,
    };
  },
};


module.exports = [
  reqProjs,
  reqProjInfo,
  reqProjsRecent
];
