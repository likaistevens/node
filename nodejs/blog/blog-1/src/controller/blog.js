const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: '标题1',
            content:'内容1',
            createTime: new Date(),
            author:'zhangSan'
        },
        {
            id: 2,
            title: '标题2',
            content:'内容3',
            createTime: new Date(),
            author:'lisi'
        }
    ]
}
module.exports = {
    getList
}