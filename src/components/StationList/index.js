import React, { Component } from 'react'
import './style.less'

class StationList extends Component{
    constructor (props) {
        super(props)
        this.state = {
            lineitems: [],
            nodeitems: [],
            choosen: 0
        }
        this.init = this.init.bind(this)
        this.choosenode = this.choosenode.bind(this)
        this.chooseline = this.chooseline.bind(this)
    }

    componentDidMount () {
        this.init()
    }

    init () {
        let line = []
        let node = []

        line = this.props.nodelist.map((item, index) => {
            node[index] = item.map(i => 
                <li key={i} onClick={(e) => this.choosenode(i, e)}>{i}</li>
            )
            return <li key={index} onClick={(e) => this.chooseline(index, e)}>{index + 1}号线</li>
        })

        this.setState((prevState, props) => ({
            lineitems: line,
            nodeitems: node
        }))
    }

    chooseline (i, e) {
        this.setState({
            choosen: i
        })
    }

    choosenode (i, e) {
        this.props.choosennode(this.state.choosen, i)
    }

    render () {
        return (
            <div className='station'>
                <ul className='station__line'>
                    {this.state.lineitems}
                </ul>
                <ul className='station__node'>
                    {this.state.nodeitems[this.state.choosen]}
                </ul>
            </div>
        )
    }
}

export default StationList