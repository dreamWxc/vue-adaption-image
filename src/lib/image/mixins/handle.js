import imageApi from '../api/image';
export default {

  data:function() {
    return {
      load:true,
      error:false,
      success:true,
      imgStyle:{
        opacity:0,
        visibility:'hidden'
      },
      transition:0,
      vSrc:undefined
    }
  },
  computed:{
    getRadius:function() {

      if (typeof this.radius === 'number') {

        return this.radius+'px';

      } else{
        return this.radius;
      }

    }
  },

  watch:{

    src:{
      handler:function (value) {

        if (!value && this.defaultIcon) {
          value = this.defaultIcon;
        }

        if (this.vSrc !== value) {
          this.vSrc = value;
        }
      },
      immediate:true
    }

  },

  methods:{
    onLoad:function(obj) {

      if (this.vSrc) {
        clearTimeout(this.waitTime);
        this.img.el = obj.target;
        setTimeout(()=>{

          this.img.height = this.img.el.clientHeight;
          this.img.width = this.img.el.clientWidth;
          this.img.wWidth = this.$refs.el.offsetWidth;
          this.img.wHeight = this.$refs.el.offsetHeight;

          obj = imageApi[this.mode](this.img);

          for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              if (typeof obj[key] === 'number') {
                obj[key]+='px';
              }
            }
          }

          this.imgStyle = obj;

          this.error = false;
          this.load = false;
          this.success = true;

        },1000/60);

      }
    },
    onError:function(obj) {

      clearTimeout(this.waitTime);
      this.error = true;
      this.load = false;
      this.success = false;
      if (this.defaultIcon && this.vSrc !== this.defaultIcon) {
        this.vSrc = this.defaultIcon;
      }
    }
  },
  created:function() {
    this.img = {
      el:'',
      width:0,
      height:0,
      wWidth:0,
      wHeight:0
    };
    this.waitTime = setTimeout(()=>{

      this.success = false;
      this.transition = 0.5;
    },300);
  }

}
