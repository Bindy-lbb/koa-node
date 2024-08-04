// 服务层（Service）
// 服务层实现具体的业务逻辑和数据访问逻辑：
const User = require("../model/user.model");
class UserService {
  // 创建用户
  async createUser(username, password) {
    // 创建数据库条目
    return await User.create({ username, password });
  }
  // 获取用户信息
  async getUserInfo({username,id}){
    const  whereOpt = {} // 这里面是查询的条件
    id && Object.assign(whereOpt, { id }) // id存在就合并进去
    username && Object.assign(whereOpt, { username }) //username存在就合并进去
    const res = await User.findOne({
      where: whereOpt, // 查询的条件
      attributes: ['id', 'username', 'password','createdAt', 'updatedAt']  // 查询成功后返回的字段
    })
    return res ? res.dataValues :false

  }

}
module.exports = new UserService();