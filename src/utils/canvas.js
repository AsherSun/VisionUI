export default class CanvasPainting {
  constructor(obj, width) {
    this.ctx = obj
    this.canvasWidth = width
  }

  setFillStyle(color, x, y, width, height) { // 绘制矩形并设置填充色, 返回绘制完成之后的宽、高
    /*
     * @params color { String } 颜色 
     * @params x { Number } 填充色区域的x坐标
     * @params y { Number } 填充色区域的y坐标
     * @params width { Number } 填充色区域的宽度
     * @params height { Number } 填充色区域的高度
     * @returns { Object } 返回绘制之后的宽度与高度
     */
    this.ctx.setFillStyle(color)
    this.ctx.fillRect(x, y, width, height)
    return {
      width,
      height
    }
  }

  setStrokeStyle(color, x, y, width, height) { // 绘制矩形并设置边框颜色, 返回绘制完成之后的宽、高
    /*
     * @params color { String } 颜色 
     * @params x { Number } 填充色区域的x坐标
     * @params y { Number } 填充色区域的y坐标
     * @params width { Number } 填充色区域的宽度
     * @params height { Number } 填充色区域的高度
     * @returns { Object } 返回绘制之后的宽度与高度
     */
    this.ctx.setStrokeStyle(color)
    this.ctx.strokeRect(x, y, width, height)
    return {
      width,
      height
    }
  }

  setFontStyle(size, color, textAlign, container, x, y) { // 绘制文本并返回绘制完成之后文本所占的宽、高
    /*
     * @params size { Number } 字体大小 
     * @params color { String } 颜色
     * @params textAlign { String } 文本对齐方式，有效值：left、center、right。以 x,y做标来对齐
     * @params container { String } 要绘制的文本内容
     * @params x { Number } 绘制文本的x起始坐标
     * @params y { y } 绘制文本的y起始坐标
     * @returns { Object } 返回绘制之后的宽度与高度
     */
    this.ctx.setFontSize(size)
    this.ctx.setFillStyle(color)
    if (textAlign) this.ctx.setTextAlign(textAlign)
    this.ctx.fillText(container, x, y)
    return {
      width: this.getTxtwidth(container).width,
      height: size
    }
  }

  drawImage(source, x, y, width, height) { // 绘制图片资源数据，返回绘制完成所占的宽度与高度
    this.ctx.drawImage(source, x, y, width, height)
    return {
      width,
      height
    }
  }

  getTxtwidth(txt) { // 获取文本内容的宽度
    return this.ctx.measureText(txt).width
  }

  drawArc(x, y, r, sAngle, eAngle, color) { // 绘制圆形
    /*
     * @params x { Number } 圆的 x 坐标
     * @params y { Number } 圆的 y 坐标
     * @tips x, y坐标规定圆心
     * @params r { Number } 圆的半径
     * @params sAngle { Number } 圆的起始弧度
     * @params eAngle { Number } 圆的终止弧度
     * @params color { Number } 圆的填充色
     * @returns { Object } 返回绘制之后的宽度与高度
     */
    this.ctx.arc(x, y, r, sAngle, eAngle)
    if (color) this.ctx.setFillStyle(color)
    this.ctx.closePath()
    this.ctx.fill()
    return {
      width: r * 2,
      height: r * 2
    }
  }

  drawDash(color, arr, lineWidth, moveToX, moveToY, lineToX, lineToY) { // 绘制虚线
    /*
     * @params color { String } 线条颜色
     * @params arr { Array } 线条的边距
     * @params lineWidth { Number } 线条的宽度
     * @params moveToX { Number } 线条的起始点X坐标
     * @params moveToY { Number } 线条的起始点Y坐标
     * @params lineToX { Number } 线条的终止点X坐标
     * @params lineToY { Number } 线条的终止点Y坐标
     * @returns { Object } 返回绘制之后的宽度与高度
     */
    this.ctx.setStrokeStyle(color) // 设置线条颜色
    this.ctx.setLineDash(arr, lineWidth) // 虚线
    this.ctx.beginPath() // 创建一个开始路径，需要使用fill或者stroke才会让路径进行填充或者描边
    this.ctx.moveTo(moveToX, moveToY) // 起始点
    this.ctx.lineTo(lineToX, lineToY) // 结束点
    this.ctx.stroke() // 绘制线条
    return {
      width: lineToX - moveToX,
      height: lineToY - moveToY
    }
  }

  clipArcImg(x, y, r, sAngle, eAngle, imgSrc, imgX, imgY, imgWidth, imgHeight) { // 剪切圆形图片, 返回宽高
    /*
     * @params x { Number } 圆的 x 坐标
     * @params y { Number } 圆的 y 坐标
     * @tips x, y坐标规定圆心
     * @params r { Number } 圆的半径
     * @params sAngle { Number } 圆的起始弧度
     * @params eAngle { Number } 圆的终止弧度
     * @params imgSrc { Number } 填充在圆形上的图片资源
     * @params imgX { Number } 图片的 X 坐标
     * @params imgY { Number } 图片的 Y 坐标
     * @params imgWidth { Number } 图片的 宽度
     * @params imgHeight { Number } 图片的 高度
     * @returns { Object } 返回绘制之后的宽度与高度
     */
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.arc(x, y, r, sAngle, eAngle)
    this.ctx.closePath()
    this.ctx.fill()
    this.ctx.clip()
    this.ctx.drawImage(imgSrc, imgX, imgY, imgWidth, imgHeight)
    this.ctx.restore()
    return {
      width: imgWidth,
      height: imgHeight
    }
  }
}