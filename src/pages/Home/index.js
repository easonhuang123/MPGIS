import React, { Component } from 'react'
import Message from './message'
import Swiper from './swiper'
import ContentBox from './content-box'
import Location from './location'

class Home extends Component {
  componentDidMount () {
    window.mm = {
      lng: 0,
      lat: 0
    }
    //加载地图，调用浏览器定位服务
    let map = new window.AMap.Map('container', {
        resizeEnable: true
    });
    map.plugin('AMap.Geolocation', function() {
        let geolocation = new AMap.Geolocation();
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
        AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
    });
    //解析定位结果
    function onComplete(data) {
        var str=['定位成功'];
        mm.lng = data.position.getLng()
        mm.lat = data.position.getLat()
        console.log(mm)
    }
    //解析定位错误信息
    function onError(data) {
    };
  }

  render() {
    return (
      <div>
        <Message/>
        <Swiper/>
        <Location/>
        <ContentBox/>
      </div>
    );
  }
}

export default Home
