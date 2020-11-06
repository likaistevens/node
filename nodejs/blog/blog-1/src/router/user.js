const handleUserRouter = (req, res) => {
    const method = req.method // GET POST
    const url = req.url
    const path = url.split('?')[0]

    // 用户登录
    if(method === 'POST' && req.path === '/api/user/login'){
        return {
            msg: '用户登录'
        }
    }
}

module.exports = handleUserRouter