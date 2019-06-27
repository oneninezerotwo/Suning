import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'dva/router';

class FinancialNotice extends React.Component {

    render() {
        return (
            <div className="FinacialNotice">

                <div className="notice-wrap">
                    <span className="horn" />
                    <div className="swiper-container notice-txt swiper-container-vertical swiper-container-ios swiper-container-wp8-vertical">
                        <div className="swiper-wrapper">
                            <div className="notice-list swiper-slide swiper-slide-active" style={{ height: 36 }}>
                                <a className="anchor-hook">零钱宝系统升级公告</a></div>
                        </div>
                    </div> <span className="to-right" />
                </div>
                <div className="property-box">
                    {sessionStorage.getItem("userPhone") ?
                        <div className="bg-box login anchor-hook" style={{ width: '100%', marginTop: '0', textAlign: "left" }} onClick={() => {
                            this.props.history.push('/financialMy')
                        }}>
                            <div className="other-cont-box">
                                <div className="top">
                                    <div className="name-box">
                                        <div className="name-wrap">
                                            <p className="name">理财资产(元)</p> <i className="icon-eye" />
                                        </div>
                                        <div className="hold">
                                            <p>理财账单</p> <i className="icons-arrow" />
                                        </div>
                                    </div>
                                    <p className="num">0.00</p>
                                </div>
                                <div className="mid">
                                    <p className="name">昨日收益(元)</p>
                                    <p className="num num1">0.00</p>
                                    <div className="mark">收益提速</div>
                                </div>
                            </div>
                        </div>
                        : <div className="bg-box unlogin anchor-hook">
                            <p className="tip">买理财选苏宁</p>
                            <p className="link">查看资产</p>
                        </div>}

                </div>


            </div>

        )

    }
}

export default withRouter(connect((state) => {
    return state
})(FinancialNotice))