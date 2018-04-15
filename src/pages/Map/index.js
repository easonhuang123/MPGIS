import React, { Component } from 'react'
import './style.less'
import BackButton from '../../components/BackButton'

class Mapp extends Component {
    componentDidMount () {
        if (window.subway) {
            var mysubway = window.subway("mysubway", {
                adcode: 4403,
                theme: "colorful",
                client: 0,
                doubleclick: {
                    switch: true
                }
            })
        }
    }

    render () {
        return (
            <div className='map__container'>
                <BackButton/>
                <div id="mysubway"></div>
                {/* <img src={bigMap}/> */}
            </div>
        )
    }
}

export default Mapp