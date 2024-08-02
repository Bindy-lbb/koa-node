const {UserRegisterError} = require('../error/error')
const {createUser} = require('../service/user.service')
class UserController {
  async UserRegister(ctx, next) {
    // 错误捕捉
    try {
      const {username , password} = ctx.request.body
      // 调用 UserService 方法传入参数
       const res = await createUser(username,password)
       console.log(res,'----res=====')
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
}

module.exports= new UserController()