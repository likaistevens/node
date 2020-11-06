// app.js业务代码 逻辑处理

// env: process.env.NODE_ENV

const handleUserRouter = require('./src/router/user')
const handleBlogRouter = require('./src/router/blog')
const querystring = require('querystring')

const serverHandle = (req , res) => {
    // 设置返回格式 JSON
    res.setHeader('Content-type','application/json')

    const url = req.url
    // 获取path
    req.path = url.split('?')[0]

    // 解析query
    req.query = querystring.parse(url.split('?')[0])

    // 处理blog路由
    const blogData = handleBlogRouter(req, res)
    if(blogData){
        res.end(
            JSON.stringify(blogData)
        )
        return
    }

    // 处理blog路由
    const userData = handleUserRouter(req, res)
    if(userData){
        res.end(
            JSON.stringify(userData)
        )
        return
    }
    // 未命中路由
    res.writeHead(404, {"Content-type":"text/plain"})
    res.write("404 not found\n")
    res.end()

}

module.exports = serverHandle