# 上传插件

> + 在是阅读该文档之前请先具备微信上传API的相关知识
> + 该插件封装了微信的图片上传与视频接口、其余文件类型并没有封装，如有需要，后续会添加。插件的config配置在基于微信提供的接口之上稍微添加了几个。config完全匹配微信的API接口

## 使用

> 将viUpload文件引入要使用上传功能的页面或者 app.js

> page JS

```javascript
import viUpload from './../../utils/viUpload'
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

## Config Props

| Props | Data Type | description | 选项 | default Value | file type | 是否扩展 |
| :--: | :--: | :--: | :--: | :--: |
| count | Number | 上传图片数量 | 选填 | 1 | 用于图片上传 | 同微信图片上传接口count | 
| name | String | 服务端用于接受数据的字段 | 选填 | picture | 用于图片与视频 | 同微信upload接口name |
| fileType | String | 要上传的文件类型 | 选填 | img | 用于图片与视频 | 插件扩展接口 |
| sizeType | StringArray | 要上传的图片大小 | 选填 | ['original', 'compressed'] | 适用于图片 | 同微信图片上传接口sizeType |
| url | String | 上传路径 | 必填 | '' | 用于图片和视频 | 同微信upload接口url |
| formData | String | 文件上传的额外信息 | 选填 | '' | 用于图片和视频 | 同微信upload接口formData |
| sourceType | StringArray | 要上传的资源来源，是从相册中选择还是拍摄 | 选填 | ['album', 'camera'] | 用于图片和视频 | 同微信图片与视频上传接口sourceType |
| compressed | Boolean | 是否压缩所选的视频源文件，默认值为true，需要压缩 | 选填 | true | 用于视频 | 同微信视频上传接口compressed |
| maxDuration | NUmber | 拍摄视频最长拍摄时间，单位秒。最长支持 60 秒 | 选填 | 60 | 用于视频 | 同为视频上传接口 maxDuration |

## Config Handle

| 生命周期函数 | 方法说明 | 返回值 |
| :--: | :--: | :--: |
| beforeUpload | 用于视频上传，在视频上传之前会返回该视频的一些信息，返回值与微信视频chooseVideo接口返回值一致 | Object |
| success | 上传成功方法 | 服务端返回值 |
| fail | 上传失败方法，可能会在文件选择的时候取消上传、服务端出错都由该接口提供失败信息 | 失败信息 |

## beforeUpload reutns

| key | Data Type | description value |
| :--: | :--: | :--: |
| width | Number | 视频宽度信息 |
| height | Number | 视频高度信息 |
| thumbTempFilePath | String | 视频封面图 |
| tempFilePath | String | 本地视频资源 |
| duration | Number | 视频时长信息 |