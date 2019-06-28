import React from 'react';

import { connect } from 'dva';
import axios from 'axios';


import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.js'


class Hotspot extends React.Component {
    state = {

    }

    render() {

        return (

            <div>
                <div className="product-list14">
                    <i className="icon-zx"></i>
                    <div class="swiper-container swiper-zx">
                        <div className="swiper-wrapper" style={{ transitionDuration: '300ms', transform: 'translate3d(0px, -150px, 0px)' }}>
                            <div className="slide anchor-hook swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="4" style={{ height: '25px' }}>
                                <span className="tag">智投</span> <p className="title">不知不觉，它交出了16%的成绩单！</p>
                            </div>
                            <div className="slide anchor-hook swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="5" style={{ height: '25px' }}>
                                <span className="tag">机遇</span>
                                <p className="title">周期来了挡不住，与黄金相关概念被热捧</p>
                            </div>
                            <div className="slide anchor-hook swiper-slide" data-swiper-slide-index="0" style={{ height: '25px' }}>
                                <span className="tag">热点</span>
                                <p className="title">习特通话—打响震荡市歼灭战的第一枪</p>
                            </div>
                            <div className="slide anchor-hook swiper-slide" data-swiper-slide-index="1" style={{ height: '25px' }}>
                                <span className="tag">赚钱</span> <p className="title">享理财4号收益达标率96.97%！</p>
                            </div>
                            <div className="slide anchor-hook swiper-slide" data-swiper-slide-index="2" style={{ height: '25px' }}>
                                <span className="tag">热门</span>
                                <p className="title">创业板沸腾了，沪指上冲3000点！</p>
                            </div><div className="slide anchor-hook swiper-slide swiper-slide-prev" data-swiper-slide-index="3" style={{ height: '25px' }}>
                                <span className="tag">焦点</span>
                                <p className="title">还记得一季度的急涨吗？打响震荡市歼灭战的第二枪!</p>
                            </div>
                            <div className="slide anchor-hook swiper-slide swiper-slide-active" data-swiper-slide-index="4" style={{ height: '25px' }}>
                                <span className="tag">智投</span>
                                <p className="title">不知不觉，它交出了16%的成绩单！</p>
                            </div>
                            <div className="slide anchor-hook swiper-slide swiper-slide-next" data-swiper-slide-index="5" style={{ height: '25px' }}>
                                <span className="tag">机遇</span>
                                <p className="title">周期来了挡不住，与黄金相关概念被热捧</p>
                            </div>
                            <div className="slide anchor-hook swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style={{ height: '25px' }}>
                                <span className="tag">热点</span>
                                <p className="title">习特通话—打响震荡市歼灭战的第一枪</p>
                            </div>
                            <div className="slide anchor-hook swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1" style={{ height: '25px' }}>
                                <span className="tag">赚钱</span>
                                <p className="title">享理财4号收益达标率96.97%！</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}


export default connect()(Hotspot);