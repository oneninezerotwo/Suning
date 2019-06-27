import React from 'react'


import { connect } from 'react-redux'

class MyProperty extends React.Component {

    render() {
        return (
            <div className="swiper-slide swiper-slide-active" style={{ width: 375 }}>
                <div id="asset">
                    <input type="hidden" defaultValue={0.00} id="sumNum" data-bind="总资产" />
                    <div className={this.props.home_store.eye_isok ? "eye-icon eye-open" : "eye-icon eye-close"} style={{ backgroundPosition: "0" }} onClick={() => {
                        this.props.dispatch({
                            type: 'home_store/eye',
                            eye_isok: !this.props.home_store.eye_isok,
                            eye_isokOne: this.props.home_store.eye_isokOne
                        })
                    }} />
                    <div id="asset-chart" style={{ width: '90%', height: '2.7rem', margin: '0px auto', WebkitTapHighlightColor: 'transparent', userSelect: 'none', position: 'relative', background: 'transparent' }} _echarts_instance_="ec_1561378747125">
                        <div style={{ position: 'relative', overflow: 'hidden', width: 337, height: 270, padding: 0, margin: 0, borderWidth: 0 }}>
                            <canvas width={674} height={540} data-zr-dom-id="zr_0" style={{ position: 'absolute', left: 0, top: 0, width: 337, height: 270, userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', padding: 0, margin: 0, borderWidth: 0 }} />
                        </div>
                        <div style={{ position: 'absolute', display: 'block', borderStyle: 'solid', whiteSpace: 'nowrap', zIndex: 9999999, transition: 'left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s', backgroundColor: 'rgba(0, 0, 0, 0)', borderWidth: 0, borderColor: 'rgb(51, 51, 51)', borderRadius: 4, color: 'rgb(51, 51, 51)', font: '14px/21px "Microsoft YaHei"', padding: 5, left: '168.5px', top: 135, marginLeft: '-38px', marginTop: '-33px' }}>
                            <div style={{ textAlign: 'center', zIndex: -1 }} id="toolTipBox">
                                <p style={{ fontSize: '0.3rem', marginTop: 10, color: '#333333', textAlign: 'center', margin: 0 }}>
                                    {this.props.home_store.eye_isok ? '0.00' : "****"}</p>
                            </div>
                            <p style={{ fontSize: '0.14rem', color: '#999999', textAlign: 'center', marginBottom: 0 }}>总资产(元)</p>
                        </div>
                    </div>
                    <ul>
                        <li className="asset-item">
                            <div className="item-title">
                                <div className="circle green-border" />
                                <span>余额</span>
                            </div>
                            <div className="item-detail">
                                {/*  <div class="circle trans-color"></div> */}
                                <span id="balance" data-bind={0.00}>{this.props.home_store.eye_isok ? '0.00' : "****"}</span>
                            </div>
                        </li>
                        <li className="asset-item">
                            <a >
                                <div className="item-title">
                                    <div className="circle forId0" />
                                    <span>零钱宝</span>
                                </div>
                                <div className="item-detail">
                                    {/*  <div class="circle trans-color"></div> */}
                                    <span id="forId0" data-bind={0.00}>{this.props.home_store.eye_isok ? '0.00' : "****"}</span>
                                </div>
                            </a>
                        </li>
                        <li className="asset-item">
                            <a name="jr_none_myAssets_mylqb" >
                                <div className="item-title">
                                    <div className="circle forId1" />
                                    <span>基金</span>
                                </div>
                                <div className="item-detail">
                                    {/*  <div class="circle trans-color"></div> */}
                                    <span id="forId1" data-bind={0.00}>{this.props.home_store.eye_isok ? '0.00' : "****"}</span>
                                </div>
                            </a>
                        </li>
                        <li className="asset-item">
                            <a name="jr_none_myAssets_mylqb" >
                                <div className="item-title">
                                    <div className="circle forId2" />
                                    <span>定期理财</span>
                                </div>
                                <div className="item-detail">
                                    {/*  <div class="circle trans-color"></div> */}
                                    <span id="forId2" data-bind={0.00}>{this.props.home_store.eye_isok ? '0.00' : "****"}</span>
                                </div>
                            </a>
                        </li>
                        <li className="asset-item" style={{ borderBottom: 'none' }}>
                            <a name="jr_none_myAssets_mylqb" >
                                <div className="item-title">
                                    <div className="circle forId3" />
                                    <span>黄金</span>
                                </div>
                                <div className="item-detail">
                                    {/*  <div class="circle trans-color"></div> */}
                                    <span id="forId3" data-bind={0.00}>{this.props.home_store.eye_isok ? '0.00' : "****"}</span>
                                </div>
                            </a>
                        </li>
                        <li className="asset-item">
                            <a name="jr_none_myAssets_mylqb" >
                                <div className="item-title">
                                    <div className="circle forId4" />
                                    <span>银行+</span>
                                </div>
                                <div className="item-detail">
                                    {/*  <div class="circle trans-color"></div> */}
                                    <span id="forId4" data-bind={0.00}>{this.props.home_store.eye_isok ? '0.00' : "****"}</span>
                                </div>
                            </a>
                        </li>
                        <li className="asset-item">
                            <a name="jr_none_myAssets_mylqb" >
                                <div className="item-title">
                                    <div className="circle forId5" />
                                    <span>消费金</span>
                                </div>
                                <div className="item-detail">
                                    {/*  <div class="circle trans-color"></div> */}
                                    <span id="forId5" data-bind={0.00}>{this.props.home_store.eye_isok ? '0.00' : "****"}</span>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>
                <div id="willingPay">
                    <a >
                        <span className="willing-pay-ico">
                            <img src="/styles/images/rxf.png" alt="" />
                        </span>
                        <span className="willing-pay-text">任性付</span>
                        <span className="pay-limit-text">去开通<img src="styles/images/arrow.png" className="arrow-icon" alt="" /></span>
                    </a>
                </div>
            </div>


        )

    }
}

export default connect((state) => {
    return state
})(MyProperty)