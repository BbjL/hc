const Mock = require("mockjs");

const { Random } = Mock;

const reqAllGroups = {
  url: "/group/find/allno",

  response: () => {
    const num = Random.natural(4, 5);
    const groups = [];

    for (let index = 0; index < num; index++) {
      groups.push({
        id: Random.id(),
        groupName: `${Random.ctitle(4, 5)}组`,
        groupIntro: Random.csentence(30, 50),
      });
    }

    return {
      status: 200,
      msg: "ok",
      groups,
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
        date: Random.date("yyyy-MM-dd"),
      },
    };
  },
};

module.exports = [reqAllGroups, reqGroupsInfo];
