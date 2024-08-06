// 应用程序的业务逻辑，接收来自路由器的请求，执行相应业务逻辑
const {UserRegisterError} = require('../error/error')
const {createUser,getUserInfo} = require('../service/user.service')
const jwt = require('jsonwebtoken') // 生成token库
class UserController {
  async UserRegister(ctx, next) {
    // 错误捕捉
    try {
      const {username , password} = ctx.request.body
      // 调用 UserService 方法传入参数
       const res = await createUser(username,password)
      ctx.body =  {
        code:0,
        message:'注册成功',
        result:res
      }
    } catch (error) {
      console.log(error)
      //   触发error事件
      ctx.app.emit('error', UserRegisterError, ctx)

    }
  }
  // 查找登录信息
  async userLogin(ctx,next) {
    try {
      const {username} = ctx.request.body
      const {password,...res} = await getUserInfo({username}) // 不获取password
      ctx.body = {
        code:0,
        message:'登录成功',
        result:jwt.sign(res,'fjhtglxt',{expiresIn:'1d'}) // 生成token,加盐加密,expiresIn设置过期时间
      }
    } catch (error) {
    }
  }

  // 获取用户信息
  async getInfo(ctx,next) {
    try {
      const {id} =  ctx.state.user // token里面存储了个人信息，所以可以结构出id
      const {password,...res} = await getUserInfo({id}) // 不获取password
      ctx.body = {
        code:0,
        message:'获取用户信息成功',
        result:res
      }
    } catch (error) {
    }

  }

}
module.exports= new UserController()