
const jwt = require('jsonwebtoken');
const {TokenExpiredError,JsonWebTokenError} = require('../error/error')
const auth = async (ctx,next)=>{
  try {
    const {token} = ctx.request.header
    ctx.state.user = jwt.verify(token,'fjhtglxt')

  } catch (error) {
    switch (error.name) {
      case 'TokenExpiredError':
        console.error('token已过期',error);
       return ctx.app.emit('error',TokenExpiredError,ctx)

      case 'JsonWebTokenError':
        console.error('无效的token',error);
        return ctx.app.emit('error',JsonWebTokenError,ctx)
    }
  }
  await next()

}
module.exports = {
  auth
}