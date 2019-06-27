import React from 'react'

import { Link } from 'dva/router';

import { connect } from 'react-redux'

class MyIncome extends React.Component {

    render() {
        return (
            <div className="swiper-slide swiper-slide-next" style={{ width: 375 }}>
                <div id="assetOne">
                    <input type="hidden" defaultValue={0.00} id="sumNumOne" data-bind="昨日收益" />
                    <div className={this.props.home_store.eye_isokOne ? "eye-iconOne eye-openOne" : "eye-iconOne eye-closeOne"} onClick={() => {
                        this.props.dispatch({
                            type: 'home_store/eye',
                            eye_isok: this.props.home_store.eye_isok,
                            eye_isokOne: !this.props.home_store.eye_isokOne
                        })
                    }} />
                    <div id="asset-chartOne" style={{ width: '90%', height: '2.7rem', margin: '0px auto', WebkitTapHighlightColor: 'transparent', userSelect: 'none', position: 'relative', background: 'transparent' }} _echarts_instance_="ec_1561378747126">
                        <div style={{ position: 'relative', overflow: 'hidden', width: 337, height: 270, padding: 0, margin: 0, borderWidth: 0, visibility: 'hidden' }}>
                        </div>
                        <div style={{ position: 'absolute', display: 'block', borderStyle: 'solid', whiteSpace: 'nowrap', zIndex: 9999999, transition: 'left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s', backgroundColor: 'rgba(0, 0, 0, 0)', borderWidth: 0, borderColor: 'rgb(51, 51, 51)', borderRadius: 4, color: 'rgb(51, 51, 51)', font: '14px/21px "Microsoft YaHei"', padding: 5, left: '168.5px', top: 135, marginLeft: '-45px', marginTop: '-33px' }}>
                            <div style={{ textAlign: 'center', zIndex: -1 }} id="toolTipBoxOne">
                                <p style={{ fontSize: '0.3rem', marginTop: 10, color: '#333333', fontFamily: 'PingFangSC-Medium', letterSpacing: '-1px', textAlign: 'center', margin: 0 }} >{this.props.home_store.eye_isokOne ? '0.00' : "****"}</p>
                            </div><p style={{ fontSize: '0.14rem', color: '#999999', fontFamily: 'PingFangSC-Regular', textAlign: 'center', marginBottom: 0 }}>昨日收益(元)</p>
                        </div>
                    </div>
                    <ul>
                        <li className="asset-item">
                            <div className="item-title">
                                <div className="circle forIdOne0" />
                                <span>零钱宝</span>
                            </div>
                            <div className="item-detail">
                                {/* <div class="circle trans-color"></div> */}
                                <span id="forIdOne0" data-bind={0.00}>{this.props.home_store.eye_isokOne ? '0.00' : "****"}</span>
                            </div>
                        </li>
                        <li className="asset-item">
                            <div className="item-title">
                                <div className="circle forIdOne1" />
                                <span>基金</span>
                            </div>
                            <div className="item-detail">
                                {/* <div class="circle trans-color"></div> */}
                                <span id="forIdOne1" data-bind={0.00}>{this.props.home_store.eye_isokOne ? '0.00' : "****"}</span>
                            </div>
                        </li>
                        <li className="asset-item">
                            <div className="item-title">
                                <div className="circle forIdOne2" />
                                <span>定期理财</span>
                            </div>
                            <div className="item-detail">
                                {/* <div class="circle trans-color"></div> */}
                                <span id="forIdOne2" data-bind={0.00}>{this.props.home_store.eye_isokOne ? '0.00' : "****"}</span>
                            </div>
                        </li>
                        <li className="asset-item">
                            <div className="item-title">
                                <div className="circle forIdOne3" />
                                <span>黄金</span>
                            </div>
                            <div className="item-detail">
                                {/* <div class="circle trans-color"></div> */}
                                <span id="forIdOne3" data-bind={0.00}>{this.props.home_store.eye_isokOne ? '0.00' : "****"}</span>
                            </div>
                        </li>
                        <li className="asset-item">
                            <div className="item-title">
                                <div className="circle forIdOne4" />
                                <span>银行+</span>
                            </div>
                            <div className="item-detail">
                                {/* <div class="circle trans-color"></div> */}
                                <span id="forIdOne4" data-bind={0.00}>{this.props.home_store.eye_isokOne ? '0.00' : "****"}</span>
                            </div>
                        </li>
                        <li className="asset-item">
                            <div className="item-title">
                                <div className="circle forIdOne5" />
                                <span>消费金</span>
                            </div>
                            <div className="item-detail">
                                {/* <div class="circle trans-color"></div> */}
                                <span id="forIdOne5" data-bind={0.00}>{this.props.home_store.eye_isokOne ? '0.00' : "****"}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="goFinance" style={{ display: 'block', color: "white" }}>去赚收益&nbsp;</Link>
            </div>



        )

    }
}

export default connect((state) => {
    return state
})(MyIncome)