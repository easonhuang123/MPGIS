import React, { Component } from 'react'
import Message from './message'
import Swiper from './swiper'
import ContentBox from './content-box'
import Location from './location'
import { inject, observer } from 'mobx-react'
import http from '../../api/http'

@inject('mapStore')
@observer
class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    let {lng, lat} = this.props.mapStore.lngLat
    if (!lng) {
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
            http.post(`http://restapi.amap.com/v3/geocode/regeo?key=7f794c73a70f7476572d350b7653562a&location=${data.position.getLng()},${data.position.getLat()}&poitype=地铁站&radius=5000&extensions=all&batch=false&roadlevel=0`)
            .then(data => {
                self.props.mapStore.setCurr(data.data.regeocode.pois[0].name)
                self.props.mapStore.setLngLat(data.data.regeocode.pois[0].location.split(',')[0], data.data.regeocode.pois[0].location.split(',')[1])
            })
            .catch(err => {
              alert(err)
          })
        }

        //解析定位错误信息
        function onError(data) {
        }
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
