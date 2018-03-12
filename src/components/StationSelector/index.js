import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import './style.less'
import location2 from '../../assets/location2.png'

class StationSelect extends Component {
    constructor (props) {
        super(props)
        this.showlist = this.showlist.bind(this)
    }

    showlist (key) {
        this.props.showlist(key)
    }

    render () {
        return (
            <div className='station__select'>
                <div className='station__select__body' onClick={() => this.showlist()}>
                    <img src={location2}/>
                    <div className='station__select__body__text'>
                        {this.props.station || '深大站'}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(StationSelect)