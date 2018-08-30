export default function uploadImg (config) {
  let target = {
    count: 1,
    name: 'picture',
    url: '',
    width: '',
    height: '',
    formData: {}
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
          formData: formData,
          success: function (res) {
            if (!(fn instanceof Function)) return false
            if (typeof res.data === 'string') {
              fn(JSON.parse(res.data))
            } else {
              fn(res.data)
            }
          }
        })
      })
    }
  })
}
