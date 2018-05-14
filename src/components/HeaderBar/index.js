import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import back from '../../assets/back2.png'
import './style.less'

class HeaderBar extends Component{
    constructor (props) {
        super(props)
        this.gotoBack = this.gotoBack.bind(this)
    }

    gotoBack () {
        this.props.history.goBack()
    }

    render () {
        return (
            <div className='headerbar'>
                <img className='headerbar__back' src={back} onClick={this.gotoBack}/>
                {this.props.title}
            </div>
        )
    }
}

export default withRouter(HeaderBar)