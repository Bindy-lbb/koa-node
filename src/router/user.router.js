const Router = require('@koa/router');
const router = new Router({prefix:'/user'})//配置接口统一模块路径
const {UserRegister,userLogin} = require('../controller/user.controller')
const {verifyLogin} = require('../middleware/user.middleware')

// router.get('/add',(ctx,next) => {
// ctx.body = "路由配置成功了"
// })
//注册接口
router.post('/register',UserRegister)
// 登录接口
router.post('/login',verifyLogin,userLogin)

module.exports = router//导出路由

