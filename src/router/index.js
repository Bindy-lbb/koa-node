const fs = require('fs')//node.js文件处理模块
const Router = require('@koa/router')
const router = new Router();
//自动引入router
fs.readdirSync(__dirname).forEach(file => {
    if (file !== 'index.js') {
        let r = require('./' + file)
        router.use(r.routes())
    }
})

module.exports = router
