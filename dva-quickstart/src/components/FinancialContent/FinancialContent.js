import React from 'react'
import { connect } from 'react-redux'
// import ajax from '../../utils/request';

class FinancialContent extends React.Component {
    state = {
        listDatas: this.props.home_store.financialData.mods[2].eles[0].data,
        listDatas2: this.props.home_store.financialData.mods[3].eles[0].data
    }

    render() {
        return (
            <div>
                <div className="floor-wrap">
                    <div sap-modid="C002" className="floor-title-box">
                        <p className="title">稳健理财</p>
                        <p className="sub-title">固定期限 省心理财</p>
                        <p name="INDEX_C002_gengduo" className="more anchor-hook">更多</p>
                    </div>
                    <div>
                        <div className="product-list02">
                            {this.state.listDatas.map((item, index) => {
                                return (
                                    <div key={index} sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;C002&quot;,&quot;eleid&quot;:&quot;10001&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__10001_1-2_undefined_undefined_undefined_10001&quot;}"
                                        name="INDEX_C002_10001_1" className="tip_card card_gushou anchor-hook">
                                        <div className="item_top">{item.productName}</div>
                                        <div className="item_mid">
                                            <div className="rate">
                                                <div className="label pos">{item.rate}</div>
                                                <div className="name">{item.rateText}</div>
                                            </div>
                                            <div className="info">
                                                <div className="info_top">
                                                    <p className="term">{item.period}{item.periodUnitToCN}</p>
                                                    <p className="start_up">{item.minAmount}{item.minAmountUnit}起购</p>
                                                </div>
                                                <div className="info_bottom">{item.recommendReason}</div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="floor-wrap">
                    <div sap-modid="C003" className="floor-title-box">
                        <p className="title">专业投资</p>
                        <p className="sub-title">王牌好基 智能优选</p>
                        <p name="INDEX_C003_gengduo" className="more anchor-hook">更多</p>
                    </div>
                    <div>
                        <div className="product-list02">
                            {this.state.listDatas2.map((item, index) => {
                                return (<div key={index} name="INDEX_C003_10002_0" className="tip_card card_net anchor-hook">
                                    <div className="item_mid">
                                        <div className="rate">
                                            <div className="label pos">{item.rate}</div>
                                            <div className="name">{item.rateText}</div>
                                        </div>
                                        <div className="info">
                                            <div className="info_top">
                                                <p className="pro_name">{item.productName}</p>
                                            </div>
                                            <div className="info_bottom">{item.recommendReason}</div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="floor-wrap">
                    <div sap-modid="C004" className="floor-title-box">
                        <p className="title">特色服务</p>
                        <p className="sub-title" />
                        {/**/}
                    </div>
                    <div>
                        <div className="hot-activity-box product-list04">
                            <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;C004&quot;,&quot;eleid&quot;:&quot;10003&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__10003_1-1_undefined_undefined_undefined_10003&quot;}"
                                name="INDEX_C004_10003_0" className="hot-activity anchor-hook"><img
                                    src="https://image2.suning.cn/uimg/cms/img/154658849038646176.png" alt="" className="img1" />
                                <div className="mid">
                                    <div className><span className="word1">一键投资</span> <span className="word2">苏宁智投</span></div>
                                    <p className="tip">苏宁金服大数据中心鼎力奉献</p>
                                </div> <img src="https://image2.suning.cn/uimg/cms/img/155369551757078589.png" alt=""
                                    className="img2" />
                            </div>
                            <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;C004&quot;,&quot;eleid&quot;:&quot;10003&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__10003_1-2_undefined_undefined_undefined_10003&quot;}"
                                name="INDEX_C004_10003_1" className="hot-activity anchor-hook"><img
                                    src="https://image2.suning.cn/uimg/cms/img/154658880637683679.png" alt="" className="img1" />
                                <div className="mid">
                                    <div className><span className="word1">优选债基</span> <span className="word2">新手必看</span></div>
                                    <p className="tip">给你稳稳的小确幸</p>
                                </div> <img src="https://image2.suning.cn/uimg/cms/img/155369563693572112.png" alt=""
                                    className="img2" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )

    }
}

export default connect((state) => {
    return state
})(FinancialContent)