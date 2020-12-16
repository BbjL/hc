const Mock = require("mockjs");
const { Random } = Mock;

const reqProjectList = {
  url:'/pro/all',
  type: "post",
  response: () => {

    const projects = [];
    const num = Random.natural(7, 10);

    for (let index = 0; index < num; index++) {
      projects.push({
        id: Random.id(),
        proName: Random.ctitle(5, 8),
        proIntro: Random.csentence(30, 50),
        proGrgoupZh: Random.date("yyyy-MM-dd"),
        createBy: Random.cname(),
        proDate: Random.date("yyyy-MM-dd"),
      });
    }

    return {
      status: 200,
      msg: "ok",
      projects,
    };
  },
};

module.exports = [reqProjectList];
