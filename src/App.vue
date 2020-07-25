<template>
  <div id="app">
    <adaption-image
     class="image"
     src="https://upload-images.jianshu.io/upload_images/14944664-4316487019e960fe.png?imageMogr2/auto-orient/strip|imageView2/2/w/267/format/webp"
    ></adaption-image>
    <adaption-image
      class="image"
      src="https://upload-images.jianshu.io/upload_images/14944664-4316487019e960fe.png?imageMogr2/auto-orient/strip|imageView2/2/w/267/format/webp"
    ></adaption-image>
  </div>
</template>

<script>
  import adaptionImage from './lib/image';
export default {
  name: 'app',
  components:{
    adaptionImage
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .image{
    width: 200px;
    height: 200px;
  }

</style>
