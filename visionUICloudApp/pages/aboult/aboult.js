const app = getApp()
import updateCode from "../../utils/update";
Page({
  data: {

  },
  onLoad() {
    updateCode()
  },
  triggerToImgClick({ currentTarget }) {
    let src = currentTarget.dataset.src
    wx.previewImage({
      urls: [src],
      current: src
    })
  },
  triggerToCopyLink({currentTarget}) {
    app.copyTxt(currentTarget.dataset.copy);
  }
})
