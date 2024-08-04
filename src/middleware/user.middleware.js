// 中间件
const {getUserInfo} = require('../service/user.service')
const {useIsUndefined,userPasswordError,userLoginError} = require('../error/error')


const verifyLogin = async(ctx,next)=>{
  // 检查密码是否相同中间件
  try {
    const {password,username} = ctx.request.body
    const res = await getUserInfo({username})
    if(!res){
      console.log(ctx,'用户名不存在')
      ctx.app.emit('error',useIsUndefined,ctx)
      return
    }
    if (res) {
      if (password !== res.password) {
        console.log(ctx,'密码错误')
        ctx.app.emit('error',userPasswordError,ctx)
        return

      }
    }
  } catch (error) {
    console.log(error)
    ctx.app.emit('error',userLoginError,ctx)
  }

  await next() //进入下一个中间件
}
module.exports = {
  verifyLogin

}
