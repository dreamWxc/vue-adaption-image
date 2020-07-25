
export { default as adaptionImage } from './lib/image';


export default {

  install:function (Vue) {
    return Vue.components(adaptionImage.name,adaptionImage);
  }

}
