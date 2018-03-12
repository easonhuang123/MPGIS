import React, { Component } from 'react'
import classNames from 'classnames'
import './style.less'

class Card extends Component{
    constructor (props) {
        super(props)
    }
 
    render () {
        let type = classNames({
            [this.props.type]: true
        })

        return (
            <div className='card'>
                <div className='card__header'>
                    <div className={type}>{this.props.title}</div>
                </div>
                <div className='card__body'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Card