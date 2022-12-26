// 博客相关的方法

// 获取博客列表
const getBlogList = (author, kw) => {
  // 从数据库里拿数据
  // 先返回假数据
  return [
    {
       id: 1,
       title: '标题1',
       content: '内容1',
       author: 'dzm',
       create_at: 182736182736
    },
    {
      id: 2,
      title: '标题2',
      content: '内容2',
      author: 'xyq',
      create_at: 1434384733435
   }
  ]
}

// 获取博客详情
const getBlogDetail = (id) => {
  return {
    id: 2,
    title: '标题2',
    content: '内容2',
    author: 'xyq',
    create_at: 1434384733435
  }
}

// 创建博客
const createBlog = (data = {}) => {
  console.log(data)
  return {
    id: 1
  }
}

// 更新博客
const updateBlog = (id, data = {}) => {
  return true
}

// 删除博客
const deleteBlog = (id) => {
  return true
}

module.exports = {
  // 获取博客列表
  getBlogList,
  // 获取博客详情
  getBlogDetail,
  // 创建博客
  createBlog,
  // 更新博客
  updateBlog,
  // 删除博客
  deleteBlog
}