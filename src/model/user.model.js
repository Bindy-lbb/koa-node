const {DataTypes} = require('sequelize')
const seq = require('../db/sql')
//username,password 为表的字段
const User = seq.define('login_user',{
    username:{
        type:DataTypes.STRING,//数据类型 更多数据类型参考https://www.sequelize.com.cn/core-concepts/model-basics#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B
        allowNull:false,//列参数-是否能为空
        unique:true,//列参数-创建唯一约束的简写 更多列参数可以参考https://www.sequelize.com.cn/core-concepts/model-basics#%E5%88%97%E5%8F%82%E6%95%B0
        comment:'用户名，唯一'
    },
    password:{
        type:DataTypes.CHAR(64),
        allowNull: false,
        comment: "用户密码"
    }
})
 User.sync()//模型同步
 //-   `User.sync()` - 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
 //-   `User.sync({ force: true })` - 将创建表,如果表已经存在,则将其首先删除
 //-   `User.sync({ alter: true })` - 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.
module.exports = User
