import viUpload from '../../components/index.js'
Page({
  viUpload,
  data: {
    uploadImgLoading: false,
    uploadVideoLoading: false,
    uploadImgSource: '',
    uploadVideoSource: '',
    videoInfo: {}
  },
  
  triggerToUploadImg () {
    let _this = this
    this.setData({
      uploadImgLoading: true
    })
    this.viUpload({
      url: 'https://api.maison-huis.com/huis-dev/img/upload.do',
      success (data) {
        _this.setData({
          uploadImgSource: JSON.stringify(data),
          uploadImgLoading: false
        })
      },
      fail(err) {
        _this.setData({
          uploadImgSource: JSON.stringify(err),
          uploadImgLoading: false
        })
      }
    })
  },

  triggerToUploadVideo() {
    let _this = this
    this.setData({
      uploadVideoLoading: true
    })
    this.viUpload({
      fileType: 'video',
      url: 'https://api.maison-huis.com/huis-dev/img/uploadVideo',
      success (data) {
        _this.setData({
          uploadVideoLoading: false,
          uploadVideoSource: JSON.stringify(data)
        })
      },
      fail: err => {
        _this.setData({
          uploadVideoLoading: false,
          uploadVideoSource: JSON.stringify(err)
        })
      },
      beforeUpload (videoInfo) {
        _this.setData({
          videoInfo
        })
      }
    })
  }
})