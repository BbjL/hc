import Mock from "mockjs";
const moduleFiles = require.context("./modules", false, /\.js$/);

const mocks = [];

moduleFiles.keys().forEach((key) => {
  mocks.push(...moduleFiles(key));
});

// mock拦截
mocks.forEach((item) => {
  Mock.mock(item.url, item.type, item.response);
});
