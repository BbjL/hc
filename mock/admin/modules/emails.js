const Mock = require("mockjs");
const { Random } = Mock;

const reqEmailsAll = {
  url: "/email/find/all",
  type: "post",
  response: (options) => {
    
    let num = NaN;
    let emails = [];
    const { pageNum, pageSize } = JSON.parse(options.body);

    !pageNum || !pageSize ? (num = Random.natural(10, 20)) : (num = pageSize);

    for (let index = 0; index < num; index++) {
      emails.push({
        emailName: Random.cname(),
        emailContent: Random.csentence(20, 50), 
        emailAccount: `${Random.email()}`,
        createTime: Random.date("yyyy-MM-dd"),
      });
    }

    return {
      status: 200,
      msg: "success!",
      emails,
      totalPages: Random.natural(5, 10)
    };
  },
};

module.exports = [reqEmailsAll];
