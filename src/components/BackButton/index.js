import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import back from '../../assets/back.png'
import './style.less'

class BackButton extends Component{
    constructor (props) {
        super(props)
        this.gotoBack = this.gotoBack.bind(this)
    }

    gotoBack () {
        console.log(this)
        this.props.history.goBack()
    }

    render () {
        return (
            <button className='back' onClick={this.gotoBack}>
                <img src={back}/>
            </button>
        )
    }
}

export default withRouter(BackButton)