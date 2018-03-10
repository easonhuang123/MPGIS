import React, { Component } from 'react'
import './style.less'
import TitleBar from '../../components/TitleBar'

class Message extends Component {
  render() {
    return (
        <div>
            <TitleBar title='重要公告'/>
            <p className='home__bulletin'>深圳地铁2、7、9、11号线列车的首、末车厢作为“女士优先车厢”向乘客开放。这意味着“女士优先车厢”已在深圳地铁全网普及。</p>
        </div>
    )
  }
}

export default Message
