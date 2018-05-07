import React, { Component } from 'react'
import './style.less'

class Recommand extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className='path__recommand'>
                {
                    this.props.lines.map((line, index) => {
                        let station = line.LinePoint.split('-')
                        let change = line.TransferLine.split('-')
                        return (
                            <div className='path__recommand__item' key={index}>
                                {/* <div className='line path__recommand__item__line1'>
                                    <div className='item tab'>换乘最少</div>
                                </div> */}
                                <div className='line path__recommand__item__line2'>
                                    <div className='item time'>{line.LinePoint}</div>
                                </div>
                                <div className='line path__recommand__item__line3'>
                                    {
                                        change.map((c, index) => {
                                            return (
                                                <span key={index}>
                                                    <div className='item subway'>{c}号线</div>
                                                    {
                                                        change.length !== index + 1 && (<div className='item to'>—</div>)
                                                    }
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                                <div className='line path__recommand__item__line4'>
                                    <div className='item change'>换乘{change.length - 1}次</div>
                                    <div className='item num'>{station.length}个站</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Recommand