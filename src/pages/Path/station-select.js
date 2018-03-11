import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import './style.less'
import back from '../../assets/back2.png'
import down from '../../assets/down.png'

class StationSelect extends Component {
    constructor (props) {
        super(props)
        this.gotoBack = this.gotoBack.bind(this)
        this.showlist = this.showlist.bind(this)
    }

    gotoBack () {
        console.log(this)
        this.props.history.goBack()
    }
    showlist (key) {
        this.props.showlist(key)
    }

    render () {
        return (
            <div className='path__select'>
                <img className='path__select__back' src={back} onClick={this.gotoBack}/>
                <div className='path__select__body'>
                    <div className='path__select__body__begin'>
                        <div className='path__select__body__begin__icon'></div>
                        <div className='path__select__body__begin__text' onClick={() => this.showlist('begin')}>
                            {this.props.begin || '选择起始站'}
                        </div>
                    </div>
                    <div className='path__select__body__end'>
                        <div className='path__select__body__end__icon'></div>
                        <div className='path__select__body__end__text' onClick={() => this.showlist('end')}>
                            {this.props.end || '选择终点站'}
                        </div>
                    </div>
                    <img className='path__select__body__img' src={down}/>
                </div>
            </div>
        )
    }
}

export default withRouter(StationSelect)