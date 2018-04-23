import React, { Component } from 'react'
import './style.less'
import BackButton from '../../components/BackButton'
import http from '../../api/http'
import { inject, observer } from 'mobx-react'

@inject('mapStore')
@observer
class Mapp extends Component {

    componentDidMount () {
        let {lng, lat} = this.props.mapStore.lngLat
        console.log(lng, lat)
        var map = new window.AMap.Map('current__container', {
            resizeEnable: true,
            zoom:15,
            center: [lng, lat]
        })
        let marker = new AMap.Marker({
            position: [lng, lat],
            title: '你的位置',
            map: map
        });
    }

    render () {
        return (
            <div className='current' id="current__container">
                <BackButton/>
            </div>
        )
    }
}

export default Mapp