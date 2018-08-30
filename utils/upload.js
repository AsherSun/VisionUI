class FileUpload {
  constructor(config) {
    let optionsTarget = {
      count: 1,
      name: 'picture',
      fileType: 'img',
      url: '',
      formData: {},
      success: function() {},
      fail: function() {}
    }
    this.options = Object.assign(optionsTarget, config)
    this.init(this.options.fileType)
  }

  init(fileType) {
    if (fileType === 'img') {
      this.chooseImage()
    } else {

    }
  }

  chooseImage() {
    let _this = this
    wx.chooseImage({
      count: this.options.count,
      success: function(res) {
        var tempFilePaths = res.tempFilePaths
        tempFilePaths.forEach(item => {
          _this.upload(item)
        })
      }
    })
  }

  upload(item) {
    let _this = this
    wx.uploadFile({
      url: this.options.url,
      filePath: item,
      name: this.options.name,
      formData: this.options.formData,
      success: function(res) {
        if (!(_this.options.success instanceof Function)) return false
        if (typeof res.data === 'string') { // 视业务情况而定
          _this.options.success(JSON.parse(res.data))
        } else {
          _this.options.success(res.data)
        }
      },
      fail: function (err) {
        _this.options.success(err)
      }
    })
  }
}

export default function viUpload(config) {
  new FileUpload(config)
}