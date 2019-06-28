import React from 'react';
import { connect } from 'dva';



class Funddingtou extends React.Component {


    render() {

        return (

            <div>


                <div>
                    <div className="head-placeholder" />
                    <header className="header-fixed border-handle">
                        <ul className="menu menu-hide hide">
                            <li><i className="triangle-up" />
                                <div className="icon-wrap"><img src="https://lcres.suning.com/common/style/app/images/head/icon1.png" className="icon-img" /></div>
                                <div className="name">理财首页</div>
                            </li>
                            <li>
                                {/**/}
                                <div className="icon-wrap"><img src="https://lcres.suning.com/common/style/app/images/head/icon2.png" className="icon-img" /></div>
                                <div className="name">我的理财</div>
                            </li>
                            <li>
                                {/**/}
                                <div className="icon-wrap"><img src="https://lcres.suning.com/common/style/app/images/head/icon3.png" className="icon-img" /></div>
                                <div className="name">零钱宝</div>
                            </li>
                        </ul>
                        <div className="mask hide" />
                    </header>
                </div>
                <div className="over-hidden">
                    <div className="banner-view">
                        <div className="swiper-container banner-list swiper-container-horizontal swiper-container-ios swiper-container-wp8-horizontal">
                            <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(56.4286px, 0px, 0px)' }}>
                                <div className="banner-img swiper-slide swiper-slide-active" style={{ width: '262.143px', marginRight: 20 }}><img alt src="http://image2.suning.cn/uimg/cms/img/155550469868516531.png" lazy="loaded" /></div>
                                <div className="banner-img swiper-slide swiper-slide-next" style={{ width: '262.143px', marginRight: 20 }}><img alt src="http://image2.suning.cn/uimg/cms/img/155550468652626827.png" lazy="loaded" /></div>
                                <div className="banner-img swiper-slide" style={{ width: '262.143px', marginRight: 20 }}><img alt src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading" /></div>
                                <div className="banner-img swiper-slide" style={{ width: '262.143px', marginRight: 20 }}><img alt src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input-wrapper">
                    <div className="input-box"><i className="icon-rmb" />
                        <div className="num-box">
                            <p className="name">目标金额</p>
                            <div className="num-cursor">
                                {/**/} <span className="placeholder">1000元起</span> <span className /></div>
                            <div className="clear-input" style={{ display: 'none' }} />
                            {/**/}
                        </div>
                    </div>
                </div>
                <div className="achieve-date"><i />
                    <div className="change-date">
                        <p className="name">实现时间</p>
                        <div className="date">
                            <div className="reduce"><span />
                            </div>
                            |<span className="time">9</span>|
        <span className="add">十</span>
                        </div>
                        <p className="unit">个月</p>
                    </div>
                </div>
                <div className="bottom-btn dis-able">
                    <p className="shade">开启梦想</p>
                </div>
            </div>





        )
    }




}





export default connect()(Funddingtou);