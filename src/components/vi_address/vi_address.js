
import cityData from './cityData.js'
Component({
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
    areaHide: {
      type: Boolean,
      value: false
    },
    region: {
      type: Array,
      value: ['640000', '640500', '640501']
    }
  },
  data: {
    provinces: [],
    addClassName: false,
    citys: [],
    areas: [],
    classNameStatus: false,
    provincesIndex: 0,
    citysIndex: 0,
    areasIndex: 0,
    address: []
  },
  attached() {
    this._setInitCity()
  },
  methods: {
    tapBtn({
      currentTarget: {
        dataset: {
          sign
        }
      }
    }) {
      if (sign === 'cancel' || sign === 'mask') {
        this.triggerEvent('cancel')
      } else {
        this.triggerEvent('confirm', this.data.address)
      }
      this.setData({
        classNameStatus: !this.data.classNameStatus
      })
      this.triggerEvent('hide', sign)
    },
    prickAddressChange({
      detail: {
        value: [a, b, c]
      }
    }) {
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
        areas: this.data.cityData[this.data.provincesIndex].sub[this.data.citysIndex].sub,
        address: [{
          code: this.data.cityData[this.data.provincesIndex].code,
          name: this.data.cityData[this.data.provincesIndex].name
        },
        {
          code: this.data.cityData[this.data.provincesIndex].sub[this.data.citysIndex].code,
          name: this.data.cityData[this.data.provincesIndex].sub[this.data.citysIndex].name
        },
        {
          code: this.data.cityData[this.data.provincesIndex].sub[this.data.citysIndex].sub[this.data.areasIndex].code,
          name: this.data.cityData[this.data.provincesIndex].sub[this.data.citysIndex].sub[this.data.areasIndex].name
        }
        ]
      })
      this.triggerEvent('addresschange', this.data.address)
    }
  }
})