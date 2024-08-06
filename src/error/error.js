
module.exports = {

    UserRegisterError : {
      code:'10001',
      message:'参数错误or其他错误',
      result:''
    },
    useIsUndefined : {
      code :'10002',
      message:'用户不存在',
      result:''
    },
    userPasswordError :{
      code :'10003',
      message:'密码错误',
      result:''
    },
    userLoginError :{
      code :'10004',
      message:'登录失败',
      result:''
    },
    TokenExpiredError: {
      code:'10005',
      message:'token过期',
      result:''
    },
    JsonWebTokenError:{
      code:'10006',
      message:'token无效',
      result:''
    }



}