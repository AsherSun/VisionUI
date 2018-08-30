export default function uploadImg (config) {
  let target = {
    count: 1,
    name: 'picture',
    url: '',
    formData: {},
    success: function () {}
  }
  let options = Object.assign(target, config)
  wx.chooseImage({
    count: options.count,
    success: function (res) {
      var tempFilePaths = res.tempFilePaths
      tempFilePaths.forEach(item => {
        wx.uploadFile({
          url: options.url,
          filePath: item,
          name: options.name,
          formData: options.formData,
          success: function (res) {
            if (!(options.success instanceof Function)) return false
            if (typeof res.data === 'string') { // 视业务情况而定
              options.success(JSON.parse(res.data))
            } else {
              options.success(res.data)
            }
          }
        })
      })
    }
  })
}
