const getList = (author, keyword) => {
  return [
    {
      id: 1,
      title: '标题1',
      content: '内容1',
      createTime: new Date(),
      author: 'zhangSan'
    },
    {
      id: 2,
      title: '标题2',
      content: '内容3',
      createTime: new Date(),
      author: 'lisi'
    }
  ]
}

const getDetail = (id) => {
  return {
    id: 1,
    title: '标题1',
    content: '内容1',
    createTime: new Date(),
    author: 'zhangSan'
  }
}

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象 包含title content属性
  return {
    id: 3 // 新建博客 插入到数据表里的id
  }
}

const updataBlog = (id, blogData = {}) => {
  return true
}

const delBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  delBlog
}
