// const querystring = require('querystring')
// const http = require('http')

// // GET请求处理
// const server = http.createServer((req, res) => {
//     console.log('method:', req.method)
//     const url = req.url
//     console.log('url:',url)
//     const query = querystring.parse(url.split('?')[1])
//     const path = url.split('?')[0]  // 获取路由
//     console.log('query:',query)
//     res.end(JSON.stringify(query))
// })
// // POST请求处理
// const server = http.createServer((req, res) => {
//     // 使用postman 发送post请求
//     if(req.method === 'POST'){
//         // 传递数据的content-type通常是JSON   还可以是text/html、text/plain、image/jpeg、application/xml等等
//         console.log('req content-type', req.headers['content-type']) 
//         let postData = ''
//         // 监听data传过来这个事件  data较大的时候会分几次发送，所以需要监听所有，并进行拼接
//         req.on('data', chunk => { 
//             postData += chunk.toString()
//         })
//         req.on('end', ()=>{
//             console.log('postData:', postData)
//             res.end('hello world')
//         })
//     }
// })

// server.listen(8000)
// console.log('ok')

// http请求综合处理
const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    // 设置返回格式为JSON
    res.setHeader('Content-type','application/json')
    // 返回的数据
    const resData = {
        method,
        url,
        path,
        query
    }
    // 返回
    if(method === 'GET'){
        res.end(JSON.stringify(resData))
    }else if(method === 'POST'){
        let postData = ''
        req.on('data',chunk => {
            postData += chunk.toString()
        })
        req.on('end',() => {
            resData.postData = postData
            // 返回
            res.end(JSON.stringify(resData))
        })
    }
})
server.listen(8000)
console.log('ok')