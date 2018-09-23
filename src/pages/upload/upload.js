import viUpload from './../../utils/viUpload'
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
      beforeUpload (videoInfo) {
        _this.setData({
          videoInfo
        })
      }
    })
  }
})