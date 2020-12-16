const reqLogin = {
  url: "/login",
  type: "post",
  response: (options) => {
    let msg = "";
    let role = "";
    let status = NaN;
    const { username, password } = JSON.parse(options.body);

    if (
      (username === "client" && password === "123") ||
      (username === "admin" && password === "123")
    ) {
      msg = "登陆成功！";
      (status = 200), (role = username);
    } else {
      msg = "账号或密码错误";
      status = 400;
    }

    return {
      status,
      msg,
      role,
    };
  },
};


module.exports = [reqLogin];
