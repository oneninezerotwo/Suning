import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'dva/router';
// import ajax from '../../utils/request';


class FinancialMyContent1 extends React.Component {
    state = {
        financialMyEye_isok: true
    }

    eye_show() {
        this.props.dispatch({
            type: "home_store/financialMyEye",
            financialMyEyeisok: !this.props.home_store.financialMyEyeisok
        })

    }

    render() {
        return (
            <section className="user-box">
                <div className="user-info border-handle">
                    <div className="user-pic"><img src="https://lcres.suning.com/portal/app/images/default-img.jpg" className="user-pic" alt="" />
                    </div>
                    <div className="user-name">爱财有道的<b>先生</b></div>
                    <div name=" licai_Myfinancial_huiyuan" value="wap" className="right anchor-hook">理财大众会员<i className="right-icon" />
                    </div>
                </div>
                <div className="user-profit">
                    <div className="title"><span>当前市值(元)</span><i className={this.props.home_store.financialMyEyeisok ? "icon-show" : "icon-hide"} onClick={this.eye_show.bind(this)} /></div>
                    <div name="licai_Myfinancial_zichan" value="wap" className="money anchor-hook">{this.props.home_store.financialMyEyeisok ? "0.00" : '****'}</div>
                    <div className="profit-info">
                        <dl name="licai_Myfinancial_huiyuan" value="wap" className="anchor-hook">
                            <dt>昨日收益(元)</dt>
                            <dd>{this.props.home_store.financialMyEyeisok ? '0.00' : '****'}</dd>
                        </dl>
                        <dl name="licai_Myfinancial_huiyuan" value="wap" className="anchor-hook">
                            <dt>累计收益(元)</dt>
                            <dd>{this.props.home_store.financialMyEyeisok ? '0.00' : '****'}</dd>
                        </dl>
                        <dl name="licai_Myfinancial_licaiquan" value="wap" className="anchor-hook">
                            <dt>理财券</dt>
                            <dd>0<span>张可用
                      </span></dd>
                        </dl>
                    </div>
                </div>
            </section>

        )

    }
}

export default withRouter(connect((state) => {
    return state
})(FinancialMyContent1))