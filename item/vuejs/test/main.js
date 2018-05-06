
var app = new Vue({
  el: '#app',
  data: {
    message:'秋佳 啦啦啦啦啦',
  },
  methods:{
  	reverseMessage:function(){
  		this.message = this.message.split('').reverse().join('')
  	}
  }
})

