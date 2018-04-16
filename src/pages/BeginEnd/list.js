import React, { Component } from 'react'
import './style.less'
import HeaderBar from '../../components/HeaderBar'

class List extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div className='be__item'>
               <div className='be__item__header'>{this.props.num}号线</div>
               <div className='be__item__body'><span className='be__item__body_1'>{this.props.a}</span> <span className='be__item__body_2'>{this.props.atime}</span></div>
               <div className='be__item__body'><span className='be__item__body_1'>{this.props.b}</span> <span className='be__item__body_2'>{this.props.btime}</span></div>
            </div>
        )
    }
} 

class BeginEnd extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        const list = [
            {
                i: 1,
                a: '罗湖',
                b: '机场东',
                atime: '06:30 - 23:00',
                btime: '06:30 - 23:00'
            },
            {
                i: 2,
                a: '赤湾',
                b: '新秀',
                atime: '06:30 - 23:00',
                btime: '06:30 - 23:00'
            },
            {
                i: 3,
                a: '益田',
                b: '双龙',
                atime: '06:30 - 23:00',
                btime: '06:30 - 23:00'
            },
            {
                i: 4,
                a: '清湖',
                b: '福田口岸',
                atime: '06:30 - 23:00',
                btime: '06:30 - 23:00'
            },
            {
                i: 5,
                a: '黄贝岭',
                b: '前海湾',
                atime: '06:30 - 23:00',
                btime: '06:30 - 23:00'
            },
            {
                i: 7,
                a: '西丽湖',
                b: '泰安',
                atime: '06:30 - 23:00',
                btime: '06:30 - 23:00'
            },
            {
                i: 9,
                a: '红树湾南',
                b: '文锦',
                atime: '06:30 - 23:00',
                btime: '06:30 - 23:00'
            },
            {
                i: 11,
                a: '碧头',
                b: '福田',
                atime: '06:30 - 23:00',
                btime: '06:30 - 23:00'
            }
        ]

        const DomList = list.map((item, index) =>
            <List key={index} num={item.i} a={item.a} b={item.b} atime={item.atime} btime={item.btime}/>
        )
        
        return (
            <div className='beginend'>
                <HeaderBar title='首末班车时刻表查询'/>
                <div className='be__list'>
                    {DomList}
                </div>
            </div>
        )
    }
}

export default BeginEnd