import React from 'react';

import { connect } from 'dva';
import axios from 'axios';


import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.js'


class Hotfund extends React.Component {
    state = {

    }

    render() {

        return (

            <div>
                <div className="floor-wrap">
                    <div sap-modid="fund-jj" className="floor-title-box">
                        <p className="title">热点基金</p>
                        <p className="sub-title">前瞻判断 精准择时 实时跟踪</p>
                    </div>
                    <div>
                        <div className="personal-tailor product-list01">
                            <div className="change-box">
                                <p className="num-box">
                                    <span className="cur">1</span>
                                    <span>/4</span>
                                </p>
                            </div>
                            <div className="personal-wrap">
                                <div className=" swiper-container personal-swiper swiper-container-horizontal swiper-container-ios swiper-container-wp8-horizontal">
                                    <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(-681.818px, 0px, 0px)' }}>
                                        <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={2} style={{ width: '340.909px' }}>
                                            <div className="pro_card_btn"><div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-jj&quot;,&quot;eleid&quot;:&quot;fund-rd&quot;,&quot;prdid&quot;:&quot;420003&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-rd_1-3_1004_420003_undefined_fund-rd&quot;}" name="FUND_fund-jj_fund-rd_2" className="btn_card anchor-hook">
                                                <div className="productInfo_top">天弘永定价值成长</div>
                                                <div className="productInfo_mid">
                                                    <div className="rate flex1">
                                                        <div className="label pos">+32.46%</div>
                                                        <div className="name">近半年涨跌幅</div>
                                                    </div>
                                                    <div className="buy_btn">立即购买</div>
                                                </div>
                                                <div className="item_bottom">
                                                    <div className="tip_box">
                                                        <p className="tip">网红基金经理</p>
                                                    </div>
                                                    <div className="tip_box">
                                                        <p className="tip">金牛加特</p>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tiny-swiper swiper-container-horizontal " id="tinySwiper">
                                <div className=" swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide  swiper-slide-active" data-swiper-slide-index={0} style={{ width: '340.909px' }}>
                                            <div className="pro_card_btn">
                                                <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-jj&quot;,&quot;eleid&quot;:&quot;fund-rd&quot;,&quot;prdid&quot;:&quot;519915&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-rd_1-1_1004_519915_undefined_fund-rd&quot;}" name="FUND_fund-jj_fund-rd_0" className="btn_card anchor-hook">
                                                    <div className="productInfo_top">富国消费主题混合</div>
                                                    <div className="productInfo_mid">
                                                        <div className="rate flex1">
                                                            <div className="label pos">+55.17%</div>
                                                            <div className="name">近半年涨跌幅</div>
                                                        </div> {/**/}
                                                        <div className="buy_btn">立即购买</div>
                                                    </div>
                                                    <div className="item_bottom">
                                                        <div className="tip_box">
                                                            <p className="tip">消费暴涨</p>
                                                        </div>
                                                        <div className="tip_box">
                                                            <p className="tip">第一名选手</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" swiper-slide  swiper-slide-next" data-swiper-slide-index={1} style={{ width: '340.909px' }}><div className="pro_card_btn"><div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-jj&quot;,&quot;eleid&quot;:&quot;fund-rd&quot;,&quot;prdid&quot;:&quot;1111&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-rd_1-2_undefined_1111_undefined_fund-rd&quot;}" name="FUND_fund-jj_fund-rd_1" className="btn_card anchor-hook"><div className="productInfo_top">享理财4号 </div> <div className="productInfo_mid"><div className="rate flex1"><div className="label qs-rate pos">7.00%-10.00%</div> <div className="name">模拟测算年化收益</div></div> <div className="term flex1"><div className="label"><span className="period">灵活</span><span className="term_type" /></div> <div className="name">投资期限</div></div> <div className="buy_btn">立即购买</div></div> <div className="item_bottom"><div className="tip_box"><p className="tip">收益高波动小</p></div><div className="tip_box"><p className="tip">攻守兼备</p></div></div></div></div></div>
                                        <div className=" swiper-slide  swiper-slide-active" data-swiper-slide-index={2} style={{ width: '340.909px' }}><div className="pro_card_btn"><div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-jj&quot;,&quot;eleid&quot;:&quot;fund-rd&quot;,&quot;prdid&quot;:&quot;420003&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-rd_1-3_1004_420003_undefined_fund-rd&quot;}" name="FUND_fund-jj_fund-rd_2" className="btn_card anchor-hook"><div className="productInfo_top">天弘永定价值成长</div> <div className="productInfo_mid"><div className="rate flex1"><div className="label pos">+32.46%</div> <div className="name">近半年涨跌幅</div></div> {/**/} <div className="buy_btn">立即购买</div></div> <div className="item_bottom"><div className="tip_box"><p className="tip">网红基金经理</p></div><div className="tip_box"><p className="tip">金牛加特</p></div></div></div></div></div>
                                        <div className=" swiper-slide  swiper-slide-active" data-swiper-slide-index={3} style={{ width: '340.909px' }}><div className="pro_card_btn"><div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-jj&quot;,&quot;eleid&quot;:&quot;fund-rd&quot;,&quot;prdid&quot;:&quot;004043&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-rd_1-4_1004_004043_undefined_fund-rd&quot;}" name="FUND_fund-jj_fund-rd_3" className="btn_card anchor-hook"><div className="productInfo_top">华夏鼎茂C</div> <div className="productInfo_mid"><div className="rate flex1"><div className="label pos">+7.52%</div> <div className="name">近1年涨跌幅</div></div> {/**/} <div className="buy_btn">立即购买</div></div> <div className="item_bottom"><div className="tip_box"><p className="tip">华夏基金出品</p></div><div className="tip_box"><p className="tip">苏宁热销</p></div></div></div></div></div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}


export default connect()(Hotfund);