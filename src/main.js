
//启动文件
const {PORT} = require('./config/config.dotenv')
const app = require('./app/index')//导入app文件
app.listen(PORT,()=>{
    console.log(`启动的服务的端口是http://localhost:${PORT}`)
})
