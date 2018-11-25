export function copyTxt(data) {
  wx.setClipboardData({
    data,
    success (res) {
      wx.showToast({
        title: '内容复制成功',
        duration: 1500,
      });
    }
  })
}