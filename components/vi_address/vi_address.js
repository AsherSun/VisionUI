// components/vi_address/vi_address.js
import cityData from './cityData.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cityData: {
      type: Array,
      value: cityData
    },
    isHide: {
      type: Boolean,
      value: false,
      observer(newVal) {
        this.setData({
          classNameStatus: newVal,
          addClassName: true
        })
      }
    },
    region: {
      type: Array,
      value: ['640000', '640500', '640501']
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    provinces: [],
    addClassName: false,
    citys: [],
    areas: [],
    classNameStatus: false,
    provincesIndex: 0,
    citysIndex: 0,
    areasIndex: 0
  },
  attached() {
    this._setInitCity()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    tapBtn({ currentTarget: { dataset: { sign } } }) {
      if (sign === 'cancel' || sign === 'mask') {
        this.triggerEvent('cancel')
      } else {
        this.triggerEvent('confirm')
      }
      this.setData({
        classNameStatus: !this.data.classNameStatus
      })
      this.triggerEvent('hide', sign)
    },
    prickAddressChange({ detail: { value: [a, b, c] } }) {
      let provincesIndex = a
      let citysIndex = b
      let areasIndex = c
      if (provincesIndex !== this.data.provincesIndex) {
        citysIndex = 0
        areasIndex = 0
      }
      if (citysIndex !== this.data.citysIndex) {
        areasIndex = 0
      }
      this.setData({
        provincesIndex,
        citysIndex,
        areasIndex
      })
      this._setInitCity()
    },
    _setInitCity() {
      this.setData({
        provinces: this.data.cityData,
        citys: this.data.cityData[this.data.provincesIndex].sub,
        areas: this.data.cityData[this.data.provincesIndex].sub[this.data.citysIndex].sub
      })
      this.triggerEvent('addresschange', {
        addressConcat: `${this.data.provinces[this.data.provincesIndex].name} - ${this.data.citys[this.data.citysIndex].name} - ${this.data.areas[this.data.areasIndex].name}`,
        address: [{
            code: this.data.provinces[this.data.provincesIndex].code,
            name: this.data.provinces[this.data.provincesIndex].name
          },
          {
            code: this.data.citys[this.data.citysIndex].code,
            name: this.data.citys[this.data.citysIndex].name
          },
          {
            code: this.data.areas[this.data.areasIndex].code,
            name: this.data.areas[this.data.areasIndex].name
          }
        ],
        codeArr: [this.data.provinces[this.data.provincesIndex].code, this.data.citys[this.data.citysIndex].code, this.data.areas[this.data.areasIndex].code]
      })
    }
  }
})