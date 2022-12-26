// 基础响应数据默写
class BaseModel {
  constructor(data, message) {
    if (typeof data == 'string') {
      this.message = data
      data = null  
      message = null
    }
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}

// 成功默写
class SuccessModel extends BaseModel {
  constructor (data, message) {
    super(data, message)
    this.code = 0
  }
}

// 成功默写
class ErrorModel extends BaseModel {
  constructor (data, message) {
    super(data, message)
    this.code = -1
  }
}

// 导出
module.exports = {
  SuccessModel,
  ErrorModel
}