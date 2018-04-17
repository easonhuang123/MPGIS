import React, { Component } from 'react'
import './style.less'
import BackButton from '../../components/BackButton'
import http from '../../api/http'

class Mapp extends Component {
    componentDidMount () {
        var map = new window.AMap.Map('current__container', {
            resizeEnable: true,
            zoom:15,
            center: [113.86679, 22.57009]
        })
        let marker = new AMap.Marker({
            position: [113.86679, 22.57009],
            title: '你的位置',
            map: map
        });
        http.post('http://restapi.amap.com/v3/geocode/regeo?key=7f794c73a70f7476572d350b7653562a&location=113.86679,22.57009&poitype=地铁站&radius=1000&extensions=all&batch=false&roadlevel=0')
        .then(data => {
            console.log(data)
        })
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