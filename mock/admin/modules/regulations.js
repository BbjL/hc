const Mock = require("mockjs");
const { Random } = Mock;

const reqRegulations = {
  url: '/insitu/all',
  type: "post",
  response: () => {

    const regulations = [];
    const num = Random.natural(7, 10);

    for (let index = 0; index < num; index++) {
      regulations.push({
        id: Random.id(),
        lastUpdateTime:  Random.date("yyyy-MM-dd"),
        insituContent: Random.ctitle(20, 25),
        lastUpdateBy: Random.date("yyyy-MM-dd"),
      });
    }

    return {
      status: 200,
      msg: "ok",
      regulations,
    };
  },
};

module.exports = [reqRegulations];
