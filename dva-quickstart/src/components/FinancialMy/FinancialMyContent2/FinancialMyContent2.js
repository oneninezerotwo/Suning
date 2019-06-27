import React from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'dva/router';
import ajax from '../../../utils/request';


class FinancialMyContent2 extends React.Component {
    state = {
        listData: []
    }
    go_back() {
        this.props.history.go(-1)
    }
    async componentDidMount() {
        this.props.dispatch({
            type: 'home_store/loingShow',
            loing_isok: true
        })
        let { data } = await ajax("https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/finicamy")
        this.setState({
            listData: data.incomeList
        })
        this.props.dispatch({
            type: 'home_store/loingShow',
            loing_isok: false
        })
    }
    render() {
        return (
            <div id="financialMycontent">
                <section className="licai-box income-list">
                    {this.state.listData.map((item, index) => {
                        return (<dl key={index} value="wap" className="border-handle anchor-hook">
                            <dt><span className="name">{item.name}</span>
                            </dt>
                            <dd>{this.props.home_store.financialMyEyeisok ? item.info : "****"}</dd>
                        </dl>)
                    })}
                </section>
                <section className="licai-bottom">
                    <ul className="contact">
                        <li className="border-handle anchor-hook"><i className="icon icon-tel" /><span>拨打热线<a href="tel:95177" name="licai_Myfinancial_rexian" value="wap">95177</a></span></li>
                        <li><i className="icon icon-ems" /><span>联系<a className="gray">在线客服</a></span></li>
                    </ul> <i className="icon-pull" />
                    <p className="text">理财有风险 投资需谨慎</p>
                </section>

            </div>
        )

    }
}

export default withRouter(connect((state) => {
    return state
})(FinancialMyContent2))