const { SuccessModel, ErrorModel } = require("../model/resModel")
const { getBlogList, getBlogDetail, createBlog, updateBlog, deleteBlog } = require("../controllers/blog")

// 处理博客相关的路由
const handleBlogRoute = (req, res) => {
  // 定义处理路由的逻辑
  if (req.method === 'GET' && req.path === '/api/blog/list') {
    // 博客列表
    const author = req.query.author || ''
    const kw = req.query.kw || ''
    const listData = getBlogList(author, kw)
    return new SuccessModel(listData)
  } else if (req.method === 'GET' && req.path === '/api/blog/detail') {
    // 博客详情
    const id = req.query.id
    const detailData = getBlogDetail(id)
    return new SuccessModel(detailData)
  } else if (req.method === 'POST' && req.path === '/api/blog/new') {
    // 新建博客
    const bolgData = req.body
    const newBlogData = createBlog(bolgData)
    return new SuccessModel(newBlogData)
  } else if (req.method === 'POST' && req.path === '/api/blog/update') {
    // 更新博客
    const bolgData = req.body
    const id = bolgData.id || ''
    const updateBlogData = updateBlog(id, bolgData)
    if (updateBlogData) {
      return new SuccessModel('更新博客成功!')
    } else {
      return new ErrorModel('更新博客失败...')
    }
  } else if (req.method === 'POST' && req.path === '/api/blog/delete') {
    // 删除博客
    const bolgData = req.body
    const id = bolgData.id || ''
    const deleteBlogData = deleteBlog(bolgData.id)
    if (deleteBlogData) {
      return new SuccessModel('删除博客成功!')
    } else {
      return new ErrorModel('删除博客失败!')
    }
  }
}

module.exports = handleBlogRoute