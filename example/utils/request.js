// 二次封装的请求方法
const BASEURL = 'https://easy-mock.com/mock/5b44d0f90390962accd9ddf5/vision'
export default function http({ url, data, method = 'get', contentType = "application/json" }, flag = true) {
  flag && wx.showLoading({
    title: '加载中...',
    mask: true
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASEURL + url,
      data,
      method,
      header: {
        'content-type': contentType,
        token: wx.getStorageSync('token')
      },
      success({ data: { data, code, message } }) {
        if (code === 200) {
          resolve(data)
        } else if (code === 1003) {
          resolve({
            err: true,
            openId: data
          })
        } else {
          reject(message)
        }
        flag && wx.hideLoading()
      },
      fail() {
        reject('message')
        flag && wx.hideLoading()
        wx.showToast({
          title: '网络不给力',
          icon: 'loading',
          // image: './../images/Artboard3.png',
          duration: 3000
        })
      }
    })
  })
}
