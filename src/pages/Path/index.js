import React, { Component } from 'react'
import './style.less'
import StationList from '../../components/StationList'

class Path extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nodelist: [
                ['1', '2'],
                ['3', '4']
            ]
        }
        this.choosenode = this.choosenode.bind(this)
    }

    choosenode (node) {
        console.log(node)
    }

    render () {
        return (
            <div className='map__container'>
                <StationList nodelist={this.state.nodelist}
                             choosenode={this.choosenode}/>
            </div>
        )
    }
}

export default Path