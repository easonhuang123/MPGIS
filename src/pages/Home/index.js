import React, { Component } from 'react'
import Message from './message'
import Swiper from './swiper'
import ContentBox from './content-box'
import Location from './location'

class Home extends Component {
  render() {
    return (
      <div>
        <Message/>
        <Swiper/>
        <Location/>
        <ContentBox/>
      </div>
    );
  }
}

export default Home
