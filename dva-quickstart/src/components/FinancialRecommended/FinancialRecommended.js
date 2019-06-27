import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import { connect } from 'react-redux'
// import ajax from '../../utils/request';

class FinancialRecommended extends React.Component {
    state = {
        listDatas: this.props.home_store.financialData.mods[1].eles[0].data,
        num: 1
    }

    render() {
        return (
            <div className="floor-wrap">
                <div sap-modid="C001" className="floor-title-box">
                    <p className="title">智能推荐</p>
                    <p className="sub-title">AI为您精挑细选</p>
                    {/**/}
                </div>
                <div>
                    <div className="personal-tailor product-list01">
                        <div className="change-box">
                            <p className="num-box"><span className="cur">{this.state.num}</span><span>/2</span></p>
                        </div>
                        <div className="personal-wrap">
                            <div className="swiper-container personal-swiper swiper-container-horizontal swiper-container-ios swiper-container-wp8-horizontal">
                                <WingBlank>
                                    <Carousel autoplay={false}

                                        afterChange={() => {
                                            this.setState({
                                                num: this.state.num === 1 ? 2 : 1
                                            })
                                        }} >
                                        {this.state.listDatas.map((item, index) => {
                                            return (<div key={index} className="pro_card_btn">
                                                <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;C001&quot;,&quot;eleid&quot;:&quot;91001&quot;,&quot;prdid&quot;:&quot;111&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__91001_1-1_undefined_111_undefined_91001&quot;}" name="INDEX_C001_91001_0" className="btn_card anchor-hook">
                                                    <div className="productInfo_top">{item.productName}</div>
                                                    <div className="productInfo_mid">
                                                        <div className="rate flex1">
                                                            <div className="label qs-rate pos">{item.rate}{item.ticketInterestRate ? '-' + item.ticketInterestRate : ""}</div>
                                                            <div className="name">{item.rateText}</div>
                                                        </div>
                                                        <div className="term flex1">
                                                            <div className="label"><span className="period">{item.period}</span><span className="term_type" /></div>
                                                            <div className="name">投资期限</div>
                                                        </div>
                                                        <div className="buy_btn">{item.buttonText}</div>
                                                    </div>
                                                    <div className="item_bottom">
                                                        <div className="recom-reason">
                                                            <p className="tip">推荐理由</p>
                                                            <p className="title">{item.recommendReason}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                        })}
                                    </Carousel>
                                </WingBlank>

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
})(FinancialRecommended)