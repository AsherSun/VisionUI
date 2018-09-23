Page({
  data: {
    popupHide_bottom: false,
    popupHide_top: false,
    popupHide_left: false,
    popupHide_right: false
  },

  popupBottom() {
    this.setData({
      popupHide_bottom: !this.data.popupHide_bottom
    })
  },
  popupTop() {
    this.setData({
      popupHide_top: !this.data.popupHide_top
    })
  },
  popupLeft() {
    this.setData({
      popupHide_left: !this.data.popupHide_left
    })
  },
  popupRight() {
    this.setData({
      popupHide_right: !this.data.popupHide_right
    })
  }
})