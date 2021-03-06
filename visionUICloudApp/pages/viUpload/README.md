# vi-upload

## 使用

> npm i vi-popup

> 使用微信开发者工具构建NPM并使用NPM模块

> 在页面的js文件中引入

```javascript
// 请使用相对路径
import viUpload from './../../miniprogram_npm/vi-upload/index.js'
Page({
  viUpload,
  data: {},
  triggerToUpload() {
    // config 
    this.viUpload({
      url: '',
      success: function () {
        // to do 
      }
    })
  }
})
```
## 示例

<!-- visionUI code example -->

### 图片上传

```javascript
import viUpload from './../../miniprogram_npm/vi-upload/index.js'

Page({
  viUpload,
  data: {
    uploadImgLoading: false,
    uploadImgSource: ''
  },

  triggerToUploadImg() {
    let _this = this
    this.setData({
      uploadImgLoading: true
    })
    this.viUpload({
      url: '',
      success(data) {
        _this.setData({
          uploadImgSource: JSON.stringify(data),
          uploadImgLoading: false
        })
      },
      fail(err) {
        _this.setData({
          uploadImgSource: JSON.stringify(err),
          uploadImgLoading: false
        })
      }
    })
  },
})
```

<!-- code example -->

### 视频上传

```javascript
import viUpload from './../../miniprogram_npm/vi-upload/index.js'
Page({
  viUpload,
  data: {
    uploadImgSource: '',
    uploadVideoSource: '',
    codeArr: require('./md.js'),
    videoInfo: {}
  },
  triggerToUploadVideo() {
    let _this = this
    this.setData({
      uploadVideoLoading: true
    })
    this.viUpload({
      fileType: 'video',
      url: '',
      success(data) {
        _this.setData({
          uploadVideoLoading: false,
          uploadVideoSource: JSON.stringify(data)
        })
      },
      fail: err => {
        _this.setData({
          uploadVideoLoading: false,
          uploadVideoSource: JSON.stringify(err)
        })
      },
      beforeUpload(videoInfo) {
        _this.setData({
          videoInfo
        })
      }
    })
  }
})
```

<!-- visionUI code example -->
## Config Props

| Props | Data Type | description | 选项 | default Value | file type | 是否扩展 |
| :--: | :--: | :--: | :--: | :--: | :--: | :--: |
| count | Number | 上传图片数量 | 选填 | 1 | 用于图片上传 | 同微信图片上传接口count | 
| name | String | 服务端用于接受数据的字段 | 选填 | picture | 用于图片与视频 | 同微信upload接口name |
| fileType | String | 要上传的文件类型 | 选填 | img | 用于图片与视频 | 插件扩展接口 |
| sizeType | StringArray | 要上传的图片大小 | 选填 | ['original', 'compressed'] | 适用于图片 | 同微信图片上传接口sizeType |
| url | String | 上传路径 | 必填 | '' | 用于图片和视频 | 同微信upload接口url |
| formData | String | 文件上传的额外信息 | 选填 | {} | 用于图片和视频 | 同微信upload接口formData |
| sourceType | StringArray | 要上传的资源来源，是从相册中选择还是拍摄 | 选填 | ['album', 'camera'] | 用于图片和视频 | 同微信图片与视频上传接口sourceType |
| compressed | Boolean | 是否压缩所选的视频源文件，默认值为true，需要压缩 | 选填 | true | 用于视频 | 同微信视频上传接口compressed |
| maxDuration | NUmber | 拍摄视频最长拍摄时间，单位秒。最长支持 60 秒 | 选填 | 60 | 用于视频 | 同为视频上传接口 maxDuration |

## Config Handle

| 生命周期函数 | 方法说明 | 返回值 |
| :--: | :--: | :--: |
| beforeUpload | 用于视频上传，在视频上传之前会返回该视频的一些信息，返回值与微信视频chooseVideo接口返回值一致 | Object |
| success | 上传成功方法 | 服务端返回值 |
| fail | 上传失败方法，可能会在文件选择的时候取消上传、服务端出错都由该接口提供失败信息 | 失败信息 |

## beforeUpload Returns Value

| key | Data Type | description value |
| :--: | :--: | :--: |
| width | Number | 视频宽度信息 |
| height | Number | 视频高度信息 |
| thumbTempFilePath | String | 视频封面图 |
| tempFilePath | String | 本地视频资源 |
| duration | Number | 视频时长信息 |

## Bug&&Tips

+ 阅读该文档之前请先具备微信上传API的相关知识
+ 该插件封装了微信的图片上传与视频上传接口、其余文件类型并没有封装，如有需要，后续会添加。
+ 插件的config配置是基于微信提供的接口之上稍微添加了几个。config完全匹配微信的API接口

## 版本信息

+ v0.0.1 第一个beat版本
+ v0.0.2 编辑组件说明文档