import React, { Component } from 'react'
import './style.less'

class TitleBar extends Component{
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className='titlebar'>
            {this.props.title}
            </div>
        )
    }
}

export default TitleBar