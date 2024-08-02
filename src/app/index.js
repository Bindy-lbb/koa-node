
// 把koa-router以及后续的全局中间件和第三方库引入聚合在这里集中管理。
const Koa = require('koa')
const app = new Koa()
const { koaBody } = require('koa-body')
app.use(koaBody({
  multipart: true
}))

const router = require('../router/index')//修改
app.use(router.routes()).use(router.allowedMethods()); //allowedMethods koa-router的中间件，用于处理请求方式不同进行特殊处理;
// 监听错误处理
app.on('error', (err, ctx) => {
  let status = 500
  switch (err.code) {
    case '10001':
      status = 400
      break;

    case '10002':
      status = 409
      break;

    default:
      status = 500
      break;
  }
  ctx.status = status
  ctx.body = err

})
module.exports = app
