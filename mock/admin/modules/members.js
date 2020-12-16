const Mock = require("mockjs");
const { Random } = Mock;

const reqMemberList = {
  url:'/pro/all',
  type: "post",
  response: () => {

    const members = [];
    const num = Random.natural(7, 10);

    for (let index = 0; index < num; index++) {
      members.push({
        id: Random.id(),
        memName: Random.cname(),
        memMajorZh: `${Random.ctitle(5, 8)}系`,
        memGroupZh: `${Random.ctitle(5, 8)}组`,
        memDirectZh: `${Random.cword(5, 8)}方向`,
        memBegin: Random.date("yyyy-MM-dd"),
        memEnd: Random.date("yyyy-MM-dd"),
      });
    }

    return {
      status: 200,
      msg: "ok",
      members,
    };
  },
};

const reqMembersInSchoolByGroup = {
  url:'/mem/find/group',
  type: "post",
  response: (options) => {

    const { group, pageSize } = JSON.parse(options.body)
    const members = [];

    for (let index = 0; index < pageSize; index++) {
      members.push({
        id: Random.id(),
        memName: Random.cname(),
        memMajorZh: `${Random.ctitle(5, 8)}系`,
        memGroupZh: group,
        memDirectZh: `${Random.cword(5, 8)}方向`,
        memBegin: Random.date("yyyy-MM-dd"),
        memEnd: Random.date("yyyy-MM-dd"),
      });
    }

    return {
      status: 200,
      msg: "ok",
      members,
      totalSize: 50
    };
  },
};

module.exports = [
  reqMemberList,
  reqMembersInSchoolByGroup
];
