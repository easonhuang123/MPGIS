import React, { Component } from 'react'
import './style.less'

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
            <div className='path__select'>
                <div className='path__select__body'>
                    <div className='path__select__begin'>
                        <div className='path__select__begin__icon'></div>
                        <div className='path__select__begin__text' onClick={() => this.showlist('begin')}>
                            {this.props.begin || '起始站'}
                        </div>
                    </div>
                    <div className='path__select__end'>
                        <div className='path__select__end__icon'></div>
                        <div className='path__select__end__text' onClick={() => this.showlist('end')}>
                            {this.props.end || '终点站'}
                        </div>
                    </div>
                    <img className='path__select__img' src=''/>
                </div>
            </div>
        )
    }
}

export default StationSelect