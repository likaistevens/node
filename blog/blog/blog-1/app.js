// app.js业务代码 逻辑处理

// env: process.env.NODE_ENV

const handleUserRouter = require('./src/router/user')
const handleBlogRouter = require('./src/router/blog')
const querystring = require('querystring')

// 用于处理post data   采用promise的方式
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    // 如果是get请求，直接resolve出来一个{} 接下来req.body = {}
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    let postData = ''
    req.on('data', chunk => {
      postData += chunk.toString()
    })
    req.on('end', () => {
      // postData为空时的处理
      if (!postData) {
        resolve({})
      }
      resolve(JSON.parse(postData))
    })
  })
  return promise
}

const serverHandle = (req, res) => {
  // 设置返回格式 JSON
  res.setHeader('Content-type', 'application/json')

  const url = req.url
  // 获取path
  req.path = url.split('?')[0]

  // 解析query
  req.query = querystring.parse(url.split('?')[1])

  // 处理post data
  getPostData(req).then(postData => {
    req.body = postData
    // 如果是get请求，上面postData为{}， req.body为{}。 直接进入下面Get的路由处理阶段

    // 处理blog路由
    const blogData = handleBlogRouter(req, res)
    if (blogData) {
      res.end(
        JSON.stringify(blogData)
      )
      return
    }

    // 处理blog路由
    const userData = handleUserRouter(req, res)
    if (userData) {
      res.end(
        JSON.stringify(userData)
      )
      return
    }
    // 未命中路由
    res.writeHead(404, { 'Content-type': 'text/plain' })
    res.write('404 not found\n')
    res.end()
  })
}

module.exports = serverHandle
