// 服务层（Service）
// 服务层实现具体的业务逻辑和数据访问逻辑：
const User = require("../model/user.model");
class UserService {
  async createUser(username, password) {
    // 创建数据库条目
    return await User.create({ username, password });
  }
}
module.exports = new UserService();