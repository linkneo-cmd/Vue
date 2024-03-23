/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息
  'http://ajax-api.itheima.net/api/weather?city='+this.city
  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */
  var app = new Vue({
    el:"#app",
    data:{
        city:'',
        weatherList:[]
    },
    methods: {
        searchWeather:function(){
            var that = this;
            console.log('查询'+ this.city + '的天气');
            axios.get('http://ajax-api.itheima.net/api/weather?city='
            +this.city)
            .then(function(response){
                console.log(response.data.data.data)
                that.weatherList = response.data.data.data
            })
            .catch(function(err){})
            // this.city = ""
        },
        changeCity:function(city){
            this.city = city;
            this.searchWeather();
        }
    },
})