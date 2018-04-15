import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import './style.less'
import locationUrl from '../../assets/location.png'
import TitleBar from '../../components/TitleBar'

class Location extends Component {
    render () {
        return (
            <div>
                <TitleBar title='当前位置'/>
                <Link to='/current'>
                <div className='home__location'>
                    离您最近的地铁站是<img className='home__location__img' src={locationUrl}/>
                    <span className='home__location__des'>高新园</span>
                </div>
                </Link>
            </div>
        )
    }
}

export default Location
