import React, { Component } from 'react'
import Swiper from 'swiper'
import TitleBar from '../../components/TitleBar'
import '../../../node_modules/swiper/dist/css/swiper.css'
import './style.less'

class Sp extends Component {
    componentDidMount () {
        var mySwiper = new Swiper('.swiper-container', {})
    }

    render() {
        return (
            <div>
                <TitleBar title='为你推荐'/>
                <div className="swiper-container home__swiper">
                    <div className="swiper-wrapper home__swiper__wrapper">
                        <div className="swiper-slide home__swiper__slide home__swiper__slide1">地铁来啦～！</div>
                        <div className="swiper-slide home__swiper__slide home__swiper__slide2">这是推广海报</div>
                        <div className="swiper-slide home__swiper__slide home__swiper__slide3">这是推广海报</div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}

export default Sp
