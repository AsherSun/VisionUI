module.exports = [
  `
  \`\`\`html
  <template>
    <vi-cell bind:click="popupBottom" title="底部出现" line></vi-cell>
    <vi-popup ishide="{{popupHide_bottom}}" bindpopuphide="popupBottom">
      <view class="popup-bottom"></view>
    </vi-popup>
  </template>
  \`\`\`

  \`\`\`javascript
  <script>
    Page({
      data: {
        popupHide_bottom: false,
      },
      popupBottom() {
        this.setData({
          popupHide_bottom: !this.data.popupHide_bottom
        })
      },
    })
  </script>
  \`\`\`

  \`\`\`css
  <style>
    .popup-bottom {
      height: 400rpx;
      background: #fff;
    }
  </style>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <vi-cell bind:click="popupTop" title="顶部出现" line></vi-cell>
    <vi-popup ishide="{{popupHide_top}}" position="top" bindpopuphide="popupTop">
      <view class="popup-top"></view>
    </vi-popup>
  </template>
  \`\`\`

  \`\`\`javascript
  <script>
    Page({
      data: {
        popupHide_top: false,
      },
      popupTop() {
        this.setData({
          popupHide_top: !this.data.popupHide_top
        })
      },
    })
  </script>
  \`\`\`

  \`\`\`css
  <style>
    .popup-top {
      height: 400rpx;
      background: #fff;
    }
  </style>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <vi-cell bind:click="popupLeft" title="左侧出现" line></vi-cell>
    <vi-popup ishide="{{popupHide_left}}" position="left" bindpopuphide="popupLeft">
      <view class="popup-left"></view>
    </vi-popup>
  </template>
  \`\`\`

  \`\`\`javascript
  <script>
    Page({
      data: {
        popupHide_left: false,
      },
      popupLeft() {
        this.setData({
          popupHide_left: !this.data.popupHide_left
        })
      },
    })
  </script>
  \`\`\`

  \`\`\`css
  <style>
   .popup-left {
      width: 100px;
      height: 100%;
      background: #FFF;
    }
  </style>
  \`\`\`
  `,
  `
  \`\`\`html
  <template>
    <vi-cell bind:click="popupRight" title="右侧出现" line></vi-cell>
    <vi-popup ishide="{{popupHide_right}}" position="right" bindpopuphide="popupRight">
      <view class="popup-right"></view>
    </vi-popup>
  </template>
  \`\`\`

  \`\`\`javascript
  <script>
    Page({
      data: {
        popupHide_right: false,
      },
      popupRight() {
        this.setData({
          popupHide_right: !this.data.popupHide_right
        })
      },
    })
  </script>
  \`\`\`

  \`\`\`css
  <style>
    .popup-right {
      width: 100px;
      height: 100%;
      background: #FFF;
    }
  </style>
  \`\`\`
  `
]