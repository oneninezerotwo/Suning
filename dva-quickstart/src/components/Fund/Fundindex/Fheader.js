import React from 'react';

import { connect } from 'dva';

import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.js'
import { withRouter } from 'dva/router';



class Fheader extends React.Component {
    state = {
        Hbool: false
    }
    Hbool() {
        this.setState({
            Hbool: !this.state.Hbool
            // className="menu menu-hide"
        })

    }
    render() {

        return (


            <div className><div className="head-placeholder" />
                <header className="header-fixed">
                    <section><div className="goback" onClick={this.back.bind(this)} style={{ zIndex: 9999 }} />
                        <div className="title" style={{ color: 'black' }}>基金</div> <div className="points-wrap">
                            <i onClick={this.Hbool.bind(this)} className="points" />
                        </div>
                    </section>
                    <ul className={this.state.Hbool === true ? "menu menu-show" : 'menu menu-hide'} >
                        <li>
                            <i className="triangle-up" /> <div className="icon-wrap"><img src="https://lcres.suning.com/common/style/app/images/head/icon1.png" className="icon-img" /></div>
                            <div className="name">理财首页</div>
                        </li>
                        <li>
                            {/**/} <div className="icon-wrap"><img src="https://lcres.suning.com/common/style/app/images/head/icon2.png" className="icon-img" /></div>
                            <div className="name">我的理财</div></li>
                        <li>{/**/} <div className="icon-wrap"><img src="https://lcres.suning.com/common/style/app/images/head/icon3.png" className="icon-img" /></div>
                            <div className="name">零钱宝</div>
                        </li>
                    </ul> <div className="mask hide" />
                </header>
            </div>


        )
    }
    back() {
        this.props.history.go(-1)
    }
    componentDidMount() {
        //可以加上你需要的条件等，然后生成Swiper对象，
        //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: true,
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper
        });
    }

}





export default withRouter(connect()(Fheader));