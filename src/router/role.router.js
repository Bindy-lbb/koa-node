const Router = require('@koa/router');
const router = new Router({prefix:'/role'})//配置接口统一模块路径
router.get('/add',(ctx,next) => {
    ctx.body = "路由自动引入成功了"
})
module.exports = router
