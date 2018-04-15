import React, { Component } from 'react'
import './style.less'
import BackButton from '../../components/BackButton'

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
    }

    render () {
        return (
            <div className='current' id="current__container">
                <BackButton/>
                {/* <img src={bigMap}/> */}
            </div>
        )
    }
}

export default Mapp