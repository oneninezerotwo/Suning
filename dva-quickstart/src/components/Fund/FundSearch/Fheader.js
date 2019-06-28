import React from 'react';

import { connect } from 'dva';

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
    back() {
        this.props.history.go(-1)
    }
    render() {

        return (


            <div className><div className="head-placeholder" />
                <header className="header-fixed">
                    <section>
                        <div className="goback" onClick={this.back.bind(this)} />
                        <div className="title" style={{color:'black'}}>基金搜索</div> <div className="points-wrap">
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


}





export default withRouter(connect()(Fheader));