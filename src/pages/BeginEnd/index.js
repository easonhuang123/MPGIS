import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import './style.less'
import HeaderBar from '../../components/HeaderBar'

class BeginEnd extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <HeaderBar title='首末班车查询'/>
                <Link to='/beginendlist'>
                <button className='be__btn be__btn__list'>首末班车时刻表查询</button>
                </Link>
                <Link to='/end'>
                <button className='be__btn be__btn__end'>末班车换乘时间查询</button>
                </Link>
            </div>
        )
    }
}

export default BeginEnd