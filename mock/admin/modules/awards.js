const Mock = require("mockjs");
const { Random } = Mock;

const reqAwardsAll = {
  url:'/award/find/all',
  type: "post",
  response: (options) => {

    let num = NaN;
    let awards = []
    const { pageNum, pageSize } = JSON.parse(options.body)

    !pageNum || !pageSize ?  num = Random.natural(10, 20) : num = pageSize 

    for (let index = 0; index < num; index++) {
      awards.push({
        id: Random.id(),
        awardName:  Random.ctitle(5, 8),
        articleName: Random.ctitle(5, 8),
        group: Random.csentence(5, 8),
        awardImg: 'http://themes.kadencethemes.com/virtue/wp-content/uploads/2015/04/photo-1424746219973-8fe3bd07d8e3-270x270.jpg',
        awardDetail: `${Random.ctitle(5, 8)}荣获${ Random.cword('一二三', 1)}等奖`,
        awardDate: Random.date('yyyy-MM-dd')
      })
    }

    return {
      status: 200,
      msg: 'success!',
      totalSize: 50,
      awards
    }
  }
}

const reqAwardsByGroup = {
  url:'/award/find/group',
  type: "post",
  response: (options) => {

    let num = NaN;
    let awards = []
    const { awardGroup, pageNum, pageSize } = JSON.parse(options.body)

    !pageNum || !pageSize ?  num = Random.natural(10, 20) : num = pageSize;

    for (let index = 0; index < num; index++) {
      awards.push({
        id: Random.id(),
        awardName:  Random.ctitle(5, 8),
        articleName: Random.ctitle(5, 8),
        group: awardGroup,
        awardGroup: awardGroup,
        awardImg: 'http://themes.kadencethemes.com/virtue/wp-content/uploads/2015/04/photo-1424746219973-8fe3bd07d8e3-270x270.jpg',
        awardDetail: `${Random.ctitle(5, 8)}荣获${ Random.cword('一二三', 1)}等奖`,
        awardDate: Random.date('yyyy-MM-dd')
      })
    }

    return {
      status: 200,
      msg: 'success!',
      totalSize: Random.natural(30, 50),
      awards
    }
  }
}



module.exports = [
  reqAwardsAll,
  reqAwardsByGroup
];
