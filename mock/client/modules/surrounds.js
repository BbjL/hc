// const Mock = require("mockjs");

// const { Random } = Mock;

const fingBlogByDate = {
  url: "/findBlog",
  type: "post",
  response: () => {
    return {
      status: 200,
      msg: "ok",
    };
  },
};

module.exports = [fingBlogByDate];
