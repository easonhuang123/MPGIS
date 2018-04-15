import React, { Component } from 'react'
import Message from './message'
import Swiper from './swiper'
import ContentBox from './content-box'
import Location from './location'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
        lng: 114.057939,
        lat: 22.543527,
    }
  }

  componentDidMount () {
    // 加载地图，调用浏览器定位服务
    let map = new window.AMap.Map('container')
    map.plugin('AMap.Geolocation', function() {
        let geolocation = new AMap.Geolocation()
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', onComplete) // 返回定位信息
        AMap.event.addListener(geolocation, 'error', onError) // 返回定位出错信息
    })
    
    let self = this
    // 解析定位结果
    function onComplete(data) {
        self.setState({
            lng: data.position.getLng(),
            lat: data.position.getLat()
        })
        console.log(self.state.lng, self.state.lat)
    }

    //解析定位错误信息
    function onError(data) {
        console.log(data)
    }
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
