import ajax from './../utils/request.js'
export default {
  getShoppingCart: () => ajax({
    url: '/api/shopping'
  })
}