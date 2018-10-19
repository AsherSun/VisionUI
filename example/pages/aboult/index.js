Page({
  data: {

  },
  triggerToImgClick({ currentTarget }) {
    let src = currentTarget.dataset.src
    wx.previewImage({
      urls: [src],
      current: src
    })
  }
})