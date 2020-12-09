const Mock = require("mockjs");
const { Random } = Mock;

const reqElegantList = {
  url: "/elegant/list",
  type: "get",
  response: () => {
    const list = [];
    const num = Random.natural(7, 10);

    for (let index = 0; index < num; index++) {
      list.push({
        id: Random.id(),
        title: `${Random.ctitle(3, 5)}大赛荣获${Random.cword("一二三", 1)}等奖`,
        content: Random.cparagraph(20, 25),
        date: Random.date("yyyy-MM-dd"),
      });
    }

    return {
      status: 200,
      msg: "ok",
      list,
    };
  },
};

const reqElegantInfo = {
  url: /\/elegant\/info\?.*/,
  type: "get",
  response: () => {
    const info = {
      title: `${Random.ctitle(3, 5)}大赛荣获${Random.cword("一二三", 1)}等奖`,
      leader: Random.name(3),
      date: Random.date("yyyy-MM-dd"),
      content: Random.cparagraph(200, 300),
    };

    const recent = [];
    for (let index = 0; index < 4; index++) {
      recent.push({
        id: Random.id(),
        title: `${Random.ctitle(3, 5)}大赛`,
        level: `荣获${Random.cword("一二三", 1)}等奖`,
      });
    }

    return {
      status: 200,
      msg: "ok",
      info,
      recent,
    };
  },
};

const reqElegantRecent = {
  url: /\/elegant\/recent\?.*/,
  type: "get",
  response: (options) => {
    const params = {};
    const paramsStr = options.url.split("?");
    paramsStr[1].split("&").forEach((item) => {
      const param = item.split("=");
      params[param[0]] = param[1];
    });

    const info = {
      title: `${Random.ctitle(3, 5)}大赛荣获${Random.cword("一二三", 1)}等奖`,
      leader: Random.name(3),
      date: Random.date("yyyy-MM-dd"),
      content: Random.cparagraph(200, 300),
    };

    const recent = [];
    const num = params.num ? params['num'] * 1 : 4;
    for (let index = 0; index < num; index++) {
      recent.push({
        id: Random.id(),
        title: `${Random.ctitle(3, 5)}大赛`,
        level: `荣获${Random.cword("一二三", 1)}等奖`,
      });
    }

    return {
      status: 200,
      msg: "ok",
      info,
      recent,
    };
  },
};

module.exports = [reqElegantList, reqElegantInfo, reqElegantRecent];
