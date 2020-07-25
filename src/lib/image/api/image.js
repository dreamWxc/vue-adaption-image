export default {

  /* cover */
  cover:function(obj){

    let style = this.aspectFit(obj);
    if (style.height < obj.wHeight){


      let radio = obj.width / obj.height;

      let diff = obj.wHeight - style.height;

      style.width = style.width + (diff * radio);


      style.top = 0;
      style.height = obj.wHeight;
      style.left = (obj.wWidth - style.width) / 2;

      return style;
    } else{

      return style;
    }

  },

  /* scaleToFill	缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素 */
  scaleToFill:function() {
    return {
      top:0,
      left:0,
      width:'100%',
      height:'100%'
    }
  },

  /*
  * aspectFit	缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
  * */
  aspectFit:function(obj) {

    // 计算 高度 是 宽度 的 多少倍
    let radio = obj.height / obj.width;
    // 计算 图片宽度 与 视图展示宽度的 差
    let diff = obj.wWidth - obj.width;

    let height = obj.height + (diff * radio);

    return {
      width: obj.wWidth,
      height:height,
      top: (obj.wHeight - height)/2,   // 设置 居中显示
      left:0
    }

  },

  /*
  * aspectFill	缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
  * */
  aspectFill:function(obj) {
    // 计算 高度 是 宽度 的 多少倍
    let radio = obj.height / obj.width;
    // 计算 图片宽度 与 视图展示宽度的 差
    let diff = obj.wHeight - obj.height;

    let width = obj.width + (diff / radio);

    return {
      width: width,
      height:obj.wHeight,
      top: 0,   // 设置 居中显示
      left:(obj.wWidth - width)/2
    }
  },


  /*
  * widthFix	缩放模式，宽度不变，高度自动变化，保持原图宽高比不变
  * */
  widthFix:function(obj) {

    // 计算 宽高比例
    let radio = obj.height / obj.width;

    // 计算差
    let diff = obj.wWidth - obj.width;

    return {
      top:0,
      bottom:0,
      position:'relative',
      width: obj.wWidth,
      height: obj.height + (diff * radio)
    }

  },

  /*
  *  bottom	裁剪模式，不缩放图片，只显示图片的底部区域
  * */
  bottom:function(obj) {
    return {
      bottom:0,
      left:(obj.wWidth - obj.width)/2
    }
  },
  /*left	裁剪模式，不缩放图片，只显示图片的左边区域*/
  left:function(obj){
    return {
      top: (obj.wHeight - obj.height)/2,
      left:0,
    }
  },
  /*
  * center	裁剪模式，不缩放图片，只显示图片的中间区域
  * */
  center:function(obj){
    return {
      top: (obj.wHeight - obj.height)/2,
      left: (obj.wWidth - obj.width)/2
    }
  },
  /*
  * topLeft	剪模式，不缩放图片，只显示图片的左上边区域
  * */
  topLeft:function(obj) {
    return {
      top:0,
      left:0
    }
  },

  /*
  * top	裁剪模式，不缩放图片，只显示图片的顶部区域
  * */
  top:function(obj) {
    return {
      top:0,
      left:(obj.wWidth - obj.width)/2
    }
  },

  /*
  * right	裁剪模式，不缩放图片，只显示图片的右边区域
  * */
  right:function(obj) {
    return {
      right:0,
      top:(obj.wHeight - obj.height)/2
    }
  },

  /*
  * top right	裁剪模式，不缩放图片，只显示图片的右上边区域
  * */
  topRight:function(obj) {
    return{
      top:0,
      right:0
    }
  },

  /*
  *  bottom left	裁剪模式，不缩放图片，只显示图片的左下边区域
  * */
  bottomLeft:function(obj) {
    return {
      left:0,
      bottom:0
    }
  },

  /*
  * bottom right	裁剪模式，不缩放图片，只显示图片的右下边区域
  * */
  bottomRight:function(obj) {
    return {
      bottom:0,
      right:0
    }
  }

}
