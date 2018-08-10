import ajax from './../utils/request.js'
export default {
  getCityData: () => ajax({
    url: '/api/getCityData'
  })
}