const Mock = require("mockjs");
const { Random } = Mock;

const reqElegantByGroup = {
  url:'/elegant/group',
  type: "post",
  response: (options) => {

    let num = NaN;
    let elegantList = []
    const { articleGroup, pageNum, pageSize } = JSON.parse(options.body)

    !pageNum || !pageSize ?  num = Random.natural(10, 20) : num = pageSize 

    for (let index = 0; index < num; index++) {
      elegantList.push({
        year: Random.date('yyyy-MM-dd'),
        articleName: Random.ctitle(5, 8),
        article_intro: Random.csentence(20, 50),
        articleGroup: articleGroup,
        articleAward: `${Random.ctitle(5, 8)}荣获${ Random.cword('一二三', 1)}等奖`,
        createBy: Random.cname(3)
      })
    }

    return {
      status: 200,
      msg: 'success!',
      elegantList
    }
  }
}

const reqElegantByYear = {
  url:'/elegant/age',
  type: "post",
  response: (options) => {

    let num = NaN;
    let elegantList = []
    const { year, pageNum, pageSize } = JSON.parse(options.body)

    !pageNum || !pageSize ?  num = Random.natural(10, 20) : num = pageSize 
    console.log(num);

    for (let index = 0; index < num; index++) {
      elegantList.push({
        year: `${year}-${Random.date('MM-dd')}`,
        articleName: Random.ctitle(5, 8),
        article_intro: Random.csentence(20, 50),
        articleGroup: `${Random.ctitle(5, 8)}组`,
        articleAward: `${Random.ctitle(5, 8)}荣获${ Random.cword('一二三', 1)}等奖`,
        createBy: Random.cname(3)
      })
    }

    return {
      status: 200,
      msg: 'success!',
      elegantList
    }
  }
}

const reqElegantIncludeYear = {
  url:'/elegant/ages', 
  type: "get",
  response: () => {
    const num = Random.natural(4, 5);
    const years = [];

    for (let index = 0; index < num; index++) {
      years.push( Random.date('yyyy') );
    }

    return {
      status: 200,
      msg: "ok",
      years
    };
  },
};


module.exports = [
  reqElegantByGroup,
  reqElegantByYear,
  reqElegantIncludeYear
];
