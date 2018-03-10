import React, { Component } from 'react'
import './style.less'
import locationUrl from '../../assets/location.png'
import TitleBar from '../../components/TitleBar'

class Location extends Component {
    render () {
        return (
            <div>
                <TitleBar title='当前位置'/>
                <div className='home__location'>
                    离您最近的地铁站是<img className='home__location__img' src={locationUrl}/>
                    <span className='home__location__des'>高新园</span>
                </div>
            </div>
        )
    }
}

export default Location
