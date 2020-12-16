const Mock = require("mockjs");

const { Random } = Mock;

const reqVidsList = {
  url: '/video/page',
  type: "post",
  response: (options) => {

    console.log(options);
    console.log(options);
    const vidsList = [];
    const num = Random.natural(7, 9);

    for (let index = 0; index < num; index++) {
      vidsList.push({
        id: Random.id(),
        videoName: Random.ctitle(5, 8),
        videoIntro: Random.csentence(50, 100),
        insituContent: `${Random.ctitle(3, 5)}组`,
        createBy: Random.cname(3),
        updateTime: Random.date('yyyy-MM-dd'),
        name: `${Random.ctitle(2, 4)}组`,
      });
    }

    return {
      status: 200,
      msg: "ok",
      vidsList,
    };
  },
};

const reqVidInfo = {
  url: /\/get_vids\/info\?.*/,
  type: "get",
  response: () => {

    const videoInfo = {
      id: Random.id(),
      title: Random.ctitle(7, 10),
      author: `${Random.ctitle(3, 4)}组`,
      date:Random.date('yyyy-MM-dd'),
      content: Random.cparagraph(20, 50)
    }

    return {
      status: 200,
      msg: "ok",
      videoInfo
    };
  },
};

const reqRecentVids = {
  url: "/get_vids/recent",
  type: "get",
  response: () => {
    const vidsList = [];
    const num = Random.natural(7, 9);

    for (let index = 0; index < num; index++) {
      vidsList.push({
        id: Random.id(),
        name: `${Random.ctitle(2, 4)}组`,
        date: Random.date('yyyy-MM-dd')
      });
    }

    return {
      status: 200,
      msg: "ok",
      vidsList,
    };
  },
};

module.exports = [
  reqVidsList, 
  reqVidInfo,
  reqRecentVids
];
