import React, { Component } from 'react'
import classNames from 'classnames'
import './style.less'

class StationList extends Component{
    constructor (props) {
        super(props)
        this.state = {
            choosen: 0
        }

        this.choosenode = this.choosenode.bind(this)
        this.chooseline = this.chooseline.bind(this)
    }
 
    chooseline (i, e) {
        this.setState((preState, props) => {
            return ({
                choosen: i
            })
        })
    }

    choosenode (i, e) {
        this.props.choosenode(i)
    }

    render () {
        let nodeitems = []

        let lineitems = this.props.nodelist.map((item, index) => {
            nodeitems[index] = item.map(i => 
                <li key={i} onClick={(e) => this.choosenode(i, e)}>{i}</li>
            )
            return (
                <li key={index}
                    onClick={(e) => this.chooseline(index, e)}
                    className={classNames({
                        'active': this.state.choosen === index
                    })}>
                    {index + 1}号线
                </li>
            )
        })

        return (
            <div className='station'>
                <div className='station__box'>
                    <ul className='station__line'>
                        <li className='station__title'>地铁线</li>
                        {lineitems}
                    </ul>
                </div>
                <div className='station__box'>
                    <ul className='station__node'>
                        <li className='station__title'>站点</li>
                        {nodeitems[this.state.choosen]}
                    </ul>
                </div>
                <div className='station__mask'  onClick={(e) => this.choosenode('', e)}></div>
            </div>
        )
    }
}

export default StationList