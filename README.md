# Koa-node

 koa框架搭建的node项目

## 项目结构

```
├── app.js
├── config
│   ├── config.default.js
│   ├── config.prod.js
│   ├── config.test.js
│   └── config.unittest.js
├── controller
│   ├── home.js
│   └── user.js
├── db
│   ├── index.js
│   └── schema
│       ├── user.js
│       └── user.test.js
├── middleware
│   ├── auth.js
│   ├── error.js
│   ├── logger.js
│   └── response.js
├── model
│   ├── user.js
│   └── user.test.js
├── router
│   ├── index.js
│   └── router.js
├── service
│   ├── user.js
│   └── user.test.js
├── test
│   ├── app.test.js
│   └── user.test.js
├── utils
│   ├── index.js
│   └── response.js
└── app.js
```

## 项目启动

```
npm install
npm run dev
```
