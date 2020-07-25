export default {

  size:{
    type:String,
    default: '0.3rem'
  },

  radius:{
    type: [String,Number],
    default: 0
  },

  icon:{
    type: Boolean,
    default: false
  },

  color:{
    type:String,
    default: '#969799'
  },

  /* 图片路径 */
  src:{
    type:String,
    default:''
  },

  /* 图片裁剪模式
    cover: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸（如果容器有 padding 内衬的话，则相应减去）。译注：这样图片完全覆盖甚至超出容器，容器中不留任何空白。
    scaleToFill	缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
    aspectFit	缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
    aspectFill	缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
    widthFix	缩放模式，宽度不变，高度自动变化，保持原图宽高比不变
    top	裁剪模式，不缩放图片，只显示图片的顶部区域
    bottom	裁剪模式，不缩放图片，只显示图片的底部区域
    center	裁剪模式，不缩放图片，只显示图片的中间区域
    left	裁剪模式，不缩放图片，只显示图片的左边区域
    right	裁剪模式，不缩放图片，只显示图片的右边区域
    top left	裁剪模式，不缩放图片，只显示图片的左上边区域
    top right	裁剪模式，不缩放图片，只显示图片的右上边区域
    bottom left	裁剪模式，不缩放图片，只显示图片的左下边区域
    bottom right	裁剪模式，不缩放图片，只显示图片的右下边区域
  * */
  mode:{
    type:String,
    default:'cover'
  },

  /* 是否懒加载图片 */
  lazyLoad:{
    type:Boolean,
    default:true
  },

  /* 加载时的底色 */
  backgroundColor:{
    type:String,
    default:'#eee'
  },

  // 默认头像
  defaultIcon:{
    type: String,
    default: ''
  }

}
