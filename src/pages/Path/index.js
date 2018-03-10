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
        this.choosennode = this.choosennode.bind(this)
    }

    choosennode (line, node) {
        console.log(this.state.nodelist[line][node])
    }

    render () {
        return (
            <div className='map__container'>
                <StationList nodelist={this.state.nodelist}
                             choosennode={this.choosennode}/>
            </div>
        )
    }
}

export default Path