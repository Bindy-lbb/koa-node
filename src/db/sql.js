

const {Sequelize} = require("sequelize")
const seq = new Sequelize("mysql_test","root","123456",
{
    host: "localhost",
    dialect: "mysql"
}) // 连接数据库


seq.authenticate().then(() => {
  console.log("和你的数据连接成功了！")
}).catch((err) => {
  console.log("数据库连接失败",err)
})

module.exports = seq


