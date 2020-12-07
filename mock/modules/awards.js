const Mock = require("mockjs");

const { Random } = Mock;

const reqAwadsCertification = {
  url: "/get_awas/certif1ications",
  type: "get",
  response: () => {

    const certif1ications = [];
    const num = Random.natural(10, 20);

    for (let index = 0; index < num; index++) {
      certif1ications.push({
        id: Random.id(),
        title: `${Random.ctitle(5, 7)}证书`,
        url: Random.image( '213x150', '#bfc' )
      })      
    }

    return {
      status: 200,
      msg: "ok",
      certif1ications
    };
  },
};

const reqAwadsCompetion= {
  url: "/get_awas/competions",
  type: "get",
  response: () => {

    const competions = [];
    const num = Random.natural(10, 20);

    for (let index = 0; index < num; index++) {
      competions.push({
        id: Random.id(),
        title: `${Random.ctitle(5, 7) + Random.cword('一二三', 1)}等奖`,
        url: Random.image( '213x150', '#bfa' )
      })      
    }

    return {
      status: 200,
      msg: "ok",
      competions
    };
  },
};


module.exports = [
  reqAwadsCertification,
  reqAwadsCompetion
];
