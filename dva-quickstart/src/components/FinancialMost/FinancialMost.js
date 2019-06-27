import React from 'react'
// import 'swiper/dist/css/swiper.min.css';
import './financialMost.css'
import { connect } from 'react-redux'
import { withRouter, Link } from 'dva/router';
// import financialHeader from '../FinancialHeader/FinancialHeader';
import ajax from '../../utils/request';


class FinancialMost extends React.Component {
    state = {
        listData: [],
        listData2: [],
        right_nav_isok: false,
        routerName: ['/financial', '/financialMy']
    }
    go_back() {
        this.props.history.go(-1)
        console.log(1)
    }
    right_nav() {
        this.setState({
            right_nav_isok: !this.state.right_nav_isok
        })
    }
    turn_router1() {
        // this.props.history.push('/financial')
    }
    turn_router2() {
        // this.props.history.push('/financialMy')
    }
    async componentDidMount() {
        let { data } = await ajax("https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/licainav#!method=get")
        this.setState({
            listData: data.productList,
            listData2: data.assetList
        })
        // console.log(this.state.listData)
    }
    render() {
        return (
            <section className="page-app">
                <div className="page" >
                    <header className="header-common">
                        <section>
                            <div className="financial_goback" style={{ zIndex: 111111 }}>
                                <p onClick={this.go_back.bind(this)}></p>
                            </div>
                            <div className="title" style={{ color: 'black' }}>理财</div>
                            <div className="gomenu">
                                <div className="points-wrap" onClick={this.right_nav.bind(this)}><i className="points" /></div>
                            </div>
                        </section>
                        <ul className={this.state.right_nav_isok ? "menu menu-show" : "menu menu-hide hide"}>
                            <Link to="financial"> <li>
                                <i className="triangle-up" />
                                <p className="isods1"></p>
                                <span>理财首页</span>
                            </li>
                            </Link>
                            <Link to="financialMy">  <li onClick={this.turn_router2()}>
                                <p className="isods2"></p>
                                <span>我的理财</span>
                            </li>
                            </Link>
                            <li>
                                <p className="isods3"></p>
                                <span>零钱宝</span>
                            </li>
                        </ul>
                        <div className={this.state.right_nav_isok ? "mask" : "mask hide"} />
                    </header>
                    <ul className="f-menu-sort">
                        {this.state.listData.map((item, index) => {
                            return (<li key={index}>
                                <a className="sort-box">
                                    <div className="f-menu-img">
                                        <img alt="" className="lazy-seq lazy-seq-success" src={item.picUrl} /></div>
                                    <p>{item.name}</p>
                                </a>
                            </li>)
                        })}


                    </ul>
                    <ul className="f-menu-sort border-handle mart14">
                        {this.state.listData2.map((item, index) => {
                            return (<li key={index}>
                                <a className="sort-box">
                                    <div className="f-menu-img"><img alt="" className="lazy-seq lazy-seq-success" src={item.picUrl} /></div>
                                    <p>我的理财</p>
                                </a>
                            </li>)
                        })}


                    </ul>
                    <div className="page-cont" style={{ opacity: 0, display: 'none' }} />
                </div >
            </section >
        )

    }
}

export default withRouter(connect()(FinancialMost))