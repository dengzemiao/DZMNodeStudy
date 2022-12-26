// 参数解析
const querystring = require('querystring')
// 导入博客路由处理
const handleBlogRoute = require('./src/routes/blog')

// 处理 POST 数据
const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    // 不是 POST
    if(req.method !== 'POST') {
      resolve({})
      return
    }
    // 提交的数据不是 json 数据
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    }
    // 请求数据
    let postData = ''
    // 接收数据流 stream
    req.on('data', chunk => {
      // chunk 为二进制数据，所以需要转成字符串，而且数据是一点一点传过来的，也自然需要拼接
      postData += chunk.toString()
    })
    // 接收完成
    req.on('end', () => {
      // 没有参数
      if (!postData) {
        resolve({})
        return
      }
      // 有参数，解析成 json 返回
      resolve(JSON.parse(postData))
    })
  })
}

// 服务响应回调处理函数
const serverHandler = (req, res) => {
  // 处理服务响应
  // req：请求 res：响应
  // 设置响应头
  res.setHeader('Content-Type', 'application/json')
  // 获取请求路由
  const url = req.url
  // 拆分成请求路由、请求参数
  const strs = url.split('?')
  // 路由
  req.path = strs[0]
  // GET 参数
  req.query = querystring.parse(strs[1])

  // 处理 POST 参数
  getPostData(req).then(postData => {
    // POST 参数
    req.body = postData

    // 处理博客相关路由
    const blogData = handleBlogRoute(req, res)
    // 是否有数据
    if (blogData) {
      res.end(JSON.stringify(blogData))
      return
    }

    // 如果路由不正确返回 404
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.write('404 Not Found')
    res.end()
  })
}
// 导出
module.exports = serverHandler