export default {
  data: {
    asher: 'sun',
    asherObj: {
      a: 'a',
      b: 'b',
      c: [1, 2, 3, 4, 5, 6]
    }
  },
  b () {
    console.log('mixins_ motto', this.data.motto)
  },
  onShow () {
    console.log('mixins_demo：', this.data.motto)
  }
}