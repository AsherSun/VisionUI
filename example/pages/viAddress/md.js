module.exports = [
  `
  \`\`\`html
  <template>
    <vi-cell 
      bind:click="selectAddress" 
      title="点击选择城市"
      desc="{{address}}">
    </vi-cell>
    <vi-address 
      is-hide="{{isHide}}" 
      bindhide="selectAddress" 
      bindaddresschange="addressChange">
    </vi-address>
  <template>
  \`\`\`

  \`\`\`javascript
  <script>
  Page({
    data: {
      address: '',
      isHide: false
    },
    selectAddress(e) {
      this.setData({
        isHide: !this.data.isHide
      })
    },
    addressChange({ detail }) {
      this.setData({
        address: detail.map(item => item.name).join('-')
      })
    }
  })
  </script>
  \`\`\`
  `
]