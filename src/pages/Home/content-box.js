import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import './style.less'
import mapUrl from '../../assets/map.png'
import pathUrl from '../../assets/path.png'
import arriveUrl from '../../assets/arrive.png'
import beginEndUrl from '../../assets/beginend.png'
import aroundUrl from '../../assets/around.png'
import infoUrl from '../../assets/info.png'

class ContentBox extends Component{
    render() {
        return (
            <div className='home__content'>
                <div className='home__content__box'>
                    <Link to='/map'>
                        <div className="home__content__img home__content__map">
                            <img src={mapUrl}/>
                        </div>
                    </Link>
                    <p className='home__content__title'>线路查询</p>
                </div>
                <div className='home__content__box'>
                    <Link to='/map'>
                        <div className="home__content__img home__content__path">
                            <img src={pathUrl}/>
                        </div>
                    </Link>
                    <p className='home__content__title'>路线规划</p>
                </div>
                <div className='home__content__box'>
                    <Link to='/map'>
                        <div className="home__content__img home__content__arrive">
                            <img src={arriveUrl}/>
                        </div>
                    </Link>
                    <p className='home__content__title'>到站信息</p>
                </div>
                <div className='home__content__box'>
                    <Link to='/map'>
                        <div className="home__content__img home__content__begin">
                            <img src={beginEndUrl}/>
                        </div>
                    </Link>
                    <p className='home__content__title'>首末班车</p>
                </div>
                <div className='home__content__box'>
                    <Link to='/map'>
                        <div className="home__content__img home__content__around">
                            <img src={aroundUrl}/>
                        </div>
                    </Link>
                    <p className='home__content__title'>周边信息</p>
                </div>
                <div className='home__content__box'>
                    <Link to='/map'>
                        <div className="home__content__img home__content__info">
                            <img src={infoUrl}/>
                        </div>
                    </Link>
                    <p className='home__content__title'>地铁通知</p>
                </div>
            </div>
        )
    }
} 

export default ContentBox
