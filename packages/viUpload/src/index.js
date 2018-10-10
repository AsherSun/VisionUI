class FileUpload {
  constructor(config) {
    let optionsTarget = {
      count: 1,
      name: 'picture',
      fileType: 'img',
      sizeType: ['original', 'compressed'],
      url: '',
      formData: {},
      sourceType: ['album', 'camera'],
      compressed: true,
      maxDuration: 60,
      beforeUpload: function () {},
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
      this.chooseVideo()
    }
  }

  chooseImage() {
    let _this = this
    wx.chooseImage({
      count: this.options.count,
      sizeType: this.options.sizeType,
      sourceType: this.options.sourceType,
      success: function(res) {
        var tempFilePaths = res.tempFilePaths
        tempFilePaths.forEach(item => {
          _this.upload(item)
        })
      },
      fail: function (err) {
        _this.options.fail(err)
      }
    })
  }

  chooseVideo() {
    let _this = this
    wx.chooseVideo({
      sourceType: _this.options.sourceType,
      compressed: _this.options.compressed,
      maxDuration: _this.options.maxDuration,
      success: function (res) {
        _this.options.beforeUpload(res)
        _this.upload(res.tempFilePath)
      },
      fail: function (err) {
        _this.options.fail(err)
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