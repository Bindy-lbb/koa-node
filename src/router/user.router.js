const Router = require('@koa/router');
const router = new Router({prefix:'/user'})//配置接口统一模块路径
const {UserRegister} = require('../controller/user.controller')
router.get('/add',(ctx,next) => {
ctx.body = "路由配置成功了"
})

router.post('/register',UserRegister)

module.exports = router//导出路由

