const Mock = require("mockjs");
const { Random } = Mock;

const reqProjectList = {
  url:'/pro/all',
  type: "post",
  response: (options) => {

    const projects = [];
    let num = '';

    console.log(JSON.parse(options.body));
    const { pageNum, pageSize } = JSON.parse(options.body);
    pageNum && pageSize ? (num = pageSize) : (num = Random.natural(10, 20));

    for (let index = 0; index < num; index++) {
      projects.push({
        id: Random.id(),
        proName: Random.ctitle(5, 8),
        proIntro: Random.csentence(30, 50),
        proGrgoupZh:`${Random.ctitle(4, 5)}组`,
        createBy: Random.cname(),
        proDate: Random.date("yyyy-MM-dd"),
        endDate: Random.date("yyyy-MM-dd"),
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
