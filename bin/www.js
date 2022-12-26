// http 库
const http = require('http')
// 导入服务响应处理函数
const serverHandler = require('../app')

// 端口号
const PORT = 8000
// 创建服务
const server = http.createServer(serverHandler)
// 监听端口
server.listen(PORT, () => {
  // 输出提示
  console.log(`server running at port ${PORT}...`)
})
