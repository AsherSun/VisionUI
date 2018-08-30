import viUpload from './../../utils/upload'
Page({
  viUpload,
  data: {
    uploadLoading: false,
    uploadImgSource: ''
  },
  triggerToUpload () {
    let _this = this
    this.setData({
      uploadLoading: true
    })
    this.viUpload({
      url: 'https://api.maison-huis.com/huis-dev/img/upload.do',
      success (data) {
        _this.setData({
          uploadImgSource: JSON.stringify(data),
          uploadLoading: false
        })
      }
    })
  }
})