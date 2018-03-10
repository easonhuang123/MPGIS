import React, { Component } from 'react'
import bigMap from '../../assets/bigmap.png'
import './style.less'
import BackButton from '../../components/BackButton'

class Mapp extends Component {
    render () {
        return (
            <div className='map__container'>
                <BackButton/>
                <img src={bigMap}/>
            </div>
        )
    }
}

export default Mapp