import React, { Component } from 'react'
import './style.less'
import HeaderBar from '../../components/HeaderBar'

class Info extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <HeaderBar title='地铁通知'/>
                <button className='be__btn be__btn__list'>地铁通知</button>
                <button className='be__btn be__btn__end'>失物招领</button>
            </div>
        )
    }
}

export default Info