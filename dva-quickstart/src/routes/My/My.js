import React from 'react';
import './my.css';
import MyHeader from '../../components/MyHeader/MyHeader';
import MyProperty from '../../components/MyProperty/MyProperty';
import MyIncome from '../../components/MyIncome/MyIncome';
import MyOther from '../../components/MyOther/MyOther';

import { connect } from 'react-redux'


class My extends React.Component {
    state = {
        MyProperty_isok: true,
        MyIncome_isok: false,
        MyOther_isok: false
    }

    render() {
        return (
            <div>
                <MyHeader />
                <div>
                    <div className="addup" style={this.state.MyIncome_isok ? { display: 'block' } : { display: 'none' }}>
                        <div className="history"><span>历史累计收益(元)</span><span>0.00</span></div>
                    </div>
                    <div className="slide-nav">
                        <ul ref="slide_nav">
                            <li className="nav-item"><span style={{ display: 'inline-block', width: '100%', height: '100%' }} className={this.state.MyProperty_isok ? "selected" : ""} name="jr_none_myAssets_Assetstap" >资产</span></li>
                            <li className="nav-item"><span style={{ display: 'inline-block', width: '100%', height: '100%' }} className={this.state.MyIncome_isok ? "selected" : ""} name="jr_none_myAssets_earnings">昨日收益</span></li>
                            <li className="nav-item"><span style={{ display: 'inline-block', width: '100%', height: '100%' }} className={this.state.MMyOther_isok ? "selected" : ""} name="jr_none_myAssets_other">其他</span></li>
                        </ul>
                        <div ref="line" className="slide-line pos-0" />
                    </div>
                </div>

                <div className="swiper-container swiper-container-horizontal swiper-container-autoheight" style={{ background: '#ffffff' }}>
                    <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms', height: 635 }}>
                        {this.state.MyProperty_isok ? <MyProperty /> : ''}
                        {this.state.MyIncome_isok ? <MyIncome /> : ''}
                        {this.state.MyOther_isok ? <MyOther /> : ''}


                    </div>
                </div>

            </div>
        )
    }
    componentDidMount() {
        this.refs.slide_nav.onclick = (e) => {

            if (e.target.getAttribute("name") === "jr_none_myAssets_Assetstap") {
                this.refs.line.className = "slide-line pos-0"
                if (!this.state.MyProperty_isok) {
                    this.setState({
                        MyProperty_isok: true,
                        MyIncome_isok: false,
                        MyOther_isok: false
                    })

                }
            } else if (e.target.getAttribute("name") === "jr_none_myAssets_earnings") {
                this.refs.line.className = "slide-line pos-1"

                if (!this.state.MyIncome_isok) {
                    this.setState({
                        MyProperty_isok: false,
                        MyIncome_isok: true,
                        MyOther_isok: false
                    })
                }
            } else if (e.target.getAttribute("name") === "jr_none_myAssets_other") {
                this.refs.line.className = "slide-line pos-2"

                if (!this.state.MyOther_isok) {
                    console.log(this.state.MyOther_isok)
                    this.setState({
                        MyProperty_isok: false,
                        MyIncome_isok: false,
                        MyOther_isok: true
                    })

                }
            }
        }
    }
}

export default connect()(My)