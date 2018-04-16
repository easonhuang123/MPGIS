import React, { Component } from 'react'
import './style.less'

class Recommand extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className='path__recommand'>
                <div className='path__recommand__item'>
                    <div className='line path__recommand__item__line1'>
                        <div className='item tab'>换乘最少</div>
                    </div>
                    <div className='line path__recommand__item__line2'>
                        <div className='item time'>30分钟</div>
                        <div className='item price'>5元</div>
                    </div>
                    <div className='line path__recommand__item__line3'>
                        <div className='item subway'>1号线</div>
                    </div>
                    <div className='line path__recommand__item__line4'>
                        <div className='item change'>换乘0次</div>
                        <div className='item num'>9个站</div>
                        {/* <div className='item transfer'>换乘站 世界之窗 车公庙</div> */}
                    </div>
                </div>

                <div className='path__recommand__item'>
                    <div className='line path__recommand__item__line1'>
                        <div className='item tab'>时间最短</div>
                    </div>
                    <div className='line path__recommand__item__line2'>
                        <div className='item time'>10分钟</div>
                        <div className='item price'>7元</div>
                    </div>
                    <div className='line path__recommand__item__line3'>
                        <div className='item subway'>1号线</div>
                        <div className='item to'>-</div>
                        <div className='item subway'>2号线</div>
                        <div className='item to'>-</div>
                        <div className='item subway'>3号线</div>
                    </div>
                    <div className='line path__recommand__item__line4'>
                        <div className='item change'>换乘2次</div>
                        <div className='item num'>9个站</div>
                        {/* <div className='item transfer'>换乘站 世界之窗 车公庙</div> */}
                    </div>
                </div>

                <div className='path__recommand__item'>
                    <div className='line path__recommand__item__line2'>
                        <div className='item time'>30分钟</div>
                        <div className='item price'>5元</div>
                    </div>
                    <div className='line path__recommand__item__line3'>
                        <div className='item subway'>1号线</div>
                        <div className='item to'>-</div>
                        <div className='item subway'>2号线</div>
                        <div className='item to'>-</div>
                        <div className='item subway'>3号线</div>
                    </div>
                    <div className='line path__recommand__item__line4'>
                        <div className='item change'>换乘2次</div>
                        <div className='item num'>9个站</div>
                        {/* <div className='item transfer'>换乘站 世界之窗 车公庙</div> */}
                    </div>
                </div>

                <div className='path__recommand__item'>
                    <div className='line path__recommand__item__line2'>
                        <div className='item time'>30分钟</div>
                        <div className='item price'>5元</div>
                    </div>
                    <div className='line path__recommand__item__line3'>
                        <div className='item subway'>1号线</div>
                        <div className='item to'>-</div>
                        <div className='item subway'>2号线</div>
                        <div className='item to'>-</div>
                        <div className='item subway'>3号线</div>
                    </div>
                    <div className='line path__recommand__item__line4'>
                        <div className='item change'>换乘2次</div>
                        <div className='item num'>9个站</div>
                        {/* <div className='item transfer'>换乘站 世界之窗 车公庙</div> */}
                    </div>
                </div>

                <div className='path__recommand__item'>
                    <div className='line path__recommand__item__line2'>
                        <div className='item time'>30分钟</div>
                        <div className='item price'>5元</div>
                    </div>
                    <div className='line path__recommand__item__line3'>
                        <div className='item subway'>1号线</div>
                        <div className='item to'>-</div>
                        <div className='item subway'>2号线</div>
                        <div className='item to'>-</div>
                        <div className='item subway'>3号线</div>
                    </div>
                    <div className='line path__recommand__item__line4'>
                        <div className='item change'>换乘2次</div>
                        <div className='item num'>9个站</div>
                        {/* <div className='item transfer'>换乘站 世界之窗 车公庙</div> */}
                    </div>
                </div>

                <div className='path__recommand__item'>
                    <div className='line path__recommand__item__line2'>
                        <div className='item time'>30分钟</div>
                        <div className='item price'>5元</div>
                    </div>
                    <div className='line path__recommand__item__line3'>
                        <div className='item subway'>1号线</div>
                        <div className='item to'>-</div>
                        <div className='item subway'>2号线</div>
                        <div className='item to'>-</div>
                        <div className='item subway'>3号线</div>
                    </div>
                    <div className='line path__recommand__item__line4'>
                        <div className='item change'>换乘2次</div>
                        <div className='item num'>9个站</div>
                        {/* <div className='item transfer'>换乘站 世界之窗 车公庙</div> */}
                    </div>
                </div>

                <div className='path__recommand__item'>
                    <div className='line path__recommand__item__line1'>
                        <div className='item tab'>陈巧超最美</div>
                    </div>
                    <div className='line path__recommand__item__line2'>
                        <div className='item time'>30分钟</div>
                        <div className='item price'>5元</div>
                    </div>
                    <div className='line path__recommand__item__line3'>
                        <div className='item subway'>1号线</div>
                        <div className='item to'>-</div>
                        <div className='item subway'>2号线</div>
                        <div className='item to'>-</div>
                        <div className='item subway'>3号线</div>
                    </div>
                    <div className='line path__recommand__item__line4'>
                        <div className='item change'>换乘2次</div>
                        <div className='item num'>9个站</div>
                        {/* <div className='item transfer'>换乘站 世界之窗 车公庙</div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Recommand