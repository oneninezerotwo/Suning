import React from 'react';

import { connect } from 'dva';
import axios from 'axios';


import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.js'


class FHotfund2 extends React.Component {
    state = {

    }

    render() {

        return (

            <div>
                <div className="floor-wrap">
                    <div className="swiper-container modstab-title-swiper swiper-container-horizontal swiper-container-ios swiper-container-wp8-horizontal">
                        <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}>
                            <div className="slide">
                                <div className="title">行业热点</div>
                            </div>
                            <div className="slide ">
                                <div className="title">安选债基</div>
                            </div>
                            <div className="slide ">
                                <div className="title">QDII基金</div>
                            </div>
                            <div className="slide ">
                                <div className="title">另类基金</div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-container modstab-cont-swiper swiper-container-horizontal swiper-container-autoheight swiper-container-ios swiper-container-wp8-horizontal">
                        <div className="swiper-wrapper" style={{ height: 185, transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}>
                            <div className="slide swiper-slide swiper-slide-active" style={{ width: 375 }}>
                                <div>
                                    <div className="product-list02">
                                        <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-tab&quot;,&quot;eleid&quot;:&quot;fund-redian01&quot;,&quot;prdid&quot;:&quot;501019&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-redian01_1-1_1004_501019_undefined_fund-redian01&quot;}" name="FUND_fund-tab_fund-redian01_0" className="tip_card card_net anchor-hook">
                                            <div className="item_mid">
                                                <div className="rate">
                                                    <div className="label pos">+14.79%</div>
                                                    <div className="name">近1年涨跌幅</div>
                                                </div>
                                                <div className="info">
                                                    <div className="info_top">
                                                        <p className="pro_name">国泰军工指数LOF</p>
                                                    </div>
                                                    <div className="info_bottom">逆市时飘红 反弹时先锋</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-tab&quot;,&quot;eleid&quot;:&quot;fund-redian01&quot;,&quot;prdid&quot;:&quot;000251&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-redian01_1-2_1004_000251_undefined_fund-redian01&quot;}" name="FUND_fund-tab_fund-redian01_1" className="tip_card card_net anchor-hook">
                                            <div className="item_mid">
                                                <div className="rate">
                                                    <div className="label pos">+24.94%</div>
                                                    <div className="name">近1年涨跌幅</div>
                                                </div>
                                                <div className="info">
                                                    <div className="info_top">
                                                        <p className="pro_name">工银金融地产混合</p>
                                                    </div>
                                                    <div className="info_bottom">一键打包金融地产龙头股</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-tab&quot;,&quot;eleid&quot;:&quot;fund-redian01&quot;,&quot;prdid&quot;:&quot;001071&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-redian01_1-3_1004_001071_undefined_fund-redian01&quot;}" name="FUND_fund-tab_fund-redian01_2" className="tip_card card_net anchor-hook">
                                            <div className="item_mid">
                                                <div className="rate">
                                                    <div className="label pos">+40.35%</div>
                                                    <div className="name">近1年涨跌幅</div>
                                                </div>
                                                <div className="info">
                                                    <div className="info_top">
                                                        <p className="pro_name">华安媒体互联网混合</p>
                                                    </div>
                                                    <div className="info_bottom">军工腾飞 助力大国</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide swiper-slide swiper-slide-next" style={{ width: 375 }}>
                                <div>
                                    <div className="product-list02">
                                        <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-tab&quot;,&quot;eleid&quot;:&quot;fund-redian02&quot;,&quot;prdid&quot;:&quot;217022&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-redian02_1-1_1004_217022_undefined_fund-redian02&quot;}" name="FUND_fund-tab_fund-redian02_0" className="tip_card card_net anchor-hook">
                                            <div className="item_mid">
                                                <div className="rate">
                                                    <div className="label pos">+3.36%</div>
                                                    <div className="name">近半年涨跌幅</div>
                                                </div>
                                                <div className="info">
                                                    <div className="info_top">
                                                        <p className="pro_name">招商产业债券</p>
                                                    </div>
                                                    <div className="info_bottom">连续4年夺金牛</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-tab&quot;,&quot;eleid&quot;:&quot;fund-redian02&quot;,&quot;prdid&quot;:&quot;531021&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-redian02_1-2_1004_531021_undefined_fund-redian02&quot;}" name="FUND_fund-tab_fund-redian02_1" className="tip_card card_net anchor-hook">
                                            <div className="item_mid">
                                                <div className="rate">
                                                    <div className="label pos">+6.12%</div>
                                                    <div className="name">近1年涨跌幅</div>
                                                </div>
                                                <div className="info">
                                                    <div className="info_top">
                                                        <p className="pro_name">建信纯债C</p>
                                                    </div>
                                                    <div className="info_bottom">持仓稳稳的 安心睡大觉</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-tab&quot;,&quot;eleid&quot;:&quot;fund-redian02&quot;,&quot;prdid&quot;:&quot;003382&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-redian02_1-3_1004_003382_undefined_fund-redian02&quot;}" name="FUND_fund-tab_fund-redian02_2" className="tip_card card_net anchor-hook">
                                            <div className="item_mid">
                                                <div className="rate">
                                                    <div className="label pos">+7.53%</div>
                                                    <div className="name">近1年涨跌幅</div>
                                                </div>
                                                <div className="info">
                                                    <div className="info_top">
                                                        <p className="pro_name">民生加银鑫享债券A</p>
                                                    </div>
                                                    <div className="info_bottom">业绩坚挺 增值就看它 </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide swiper-slide" style={{ width: 375 }}>
                                <div>
                                    <div className="product-list02">
                                        <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-tab&quot;,&quot;eleid&quot;:&quot;QDII&quot;,&quot;prdid&quot;:&quot;001061&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__QDII_1-1_1004_001061_undefined_QDII&quot;}" name="FUND_fund-tab_QDII_0" className="tip_card card_net anchor-hook">
                                            <div className="item_mid">
                                                <div className="rate">
                                                    <div className="label pos">+13.91%</div>
                                                    <div className="name">近1年涨跌幅</div>
                                                </div>
                                                <div className="info">
                                                    <div className="info_top">
                                                        <p className="pro_name">华夏海外A</p>
                                                    </div>
                                                    <div className="info_bottom">深耕亚洲，猎取美元债价值</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-tab&quot;,&quot;eleid&quot;:&quot;QDII&quot;,&quot;prdid&quot;:&quot;002400&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__QDII_1-2_1004_002400_undefined_QDII&quot;}" name="FUND_fund-tab_QDII_1" className="tip_card card_net anchor-hook">
                                            <div className="item_mid">
                                                <div className="rate">
                                                    <div className="label pos">+11.71%</div>
                                                    <div className="name">近1年涨跌幅</div>
                                                </div>
                                                <div className="info">
                                                    <div className="info_top">
                                                        <p className="pro_name">南方亚洲美元债券(QDII)A</p>
                                                    </div>
                                                    <div className="info_bottom">投资海外，捕捉高收益债价值</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-tab&quot;,&quot;eleid&quot;:&quot;QDII&quot;,&quot;prdid&quot;:&quot;050030&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__QDII_1-3_1004_050030_undefined_QDII&quot;}" name="FUND_fund-tab_QDII_2" className="tip_card card_net anchor-hook">
                                            <div className="item_mid">
                                                <div className="rate">
                                                    <div className="label pos">+14.98%</div>
                                                    <div className="name">近1年涨跌幅</div>
                                                </div>
                                                <div className="info">
                                                    <div className="info_top">
                                                        <p className="pro_name">博时亚洲票息债券QDII</p>
                                                    </div>
                                                    <div className="info_bottom">量化宽松，信用债积极可为</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slide swiper-slide" style={{ width: 375 }}>
                                <div>
                                    <div className="product-list02">
                                        <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-tab&quot;,&quot;eleid&quot;:&quot;linglei&quot;,&quot;prdid&quot;:&quot;519062&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__linglei_1-1_1004_519062_undefined_linglei&quot;}" name="FUND_fund-tab_linglei_0" className="tip_card card_net anchor-hook">
                                            <div className="item_mid">
                                                <div className="rate">
                                                    <div className="label pos">+2.11%</div>
                                                    <div className="name">近1年涨跌幅</div>
                                                </div>
                                                <div className="info">
                                                    <div className="info_top">
                                                        <p className="pro_name">海富通阿尔法对冲</p>
                                                    </div>
                                                    <div className="info_bottom">对冲策略 即使震荡也不怕</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-tab&quot;,&quot;eleid&quot;:&quot;linglei&quot;,&quot;prdid&quot;:&quot;002610&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__linglei_1-2_1004_002610_undefined_linglei&quot;}" name="FUND_fund-tab_linglei_1" className="tip_card card_net anchor-hook">
                                            <div className="item_mid">
                                                <div className="rate">
                                                    <div className="label pos">+15.95%</div>
                                                    <div className="name">近1年涨跌幅</div>
                                                </div>
                                                <div className="info">
                                                    <div className="info_top">
                                                        <p className="pro_name">博时黄金ETF联接A</p>
                                                    </div>
                                                    <div className="info_bottom">避险 紧跟金价涨跌</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-tab&quot;,&quot;eleid&quot;:&quot;linglei&quot;,&quot;prdid&quot;:&quot;000179&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__linglei_1-3_1004_000179_undefined_linglei&quot;}" name="FUND_fund-tab_linglei_2" className="tip_card card_net anchor-hook">
                                            <div className="item_mid">
                                                <div className="rate">
                                                    <div className="label pos">+20.58%</div>
                                                    <div className="name">近1年涨跌幅</div>
                                                </div>
                                                <div className="info">
                                                    <div className="info_top">
                                                        <p className="pro_name">广发美国房产指数</p>
                                                    </div>
                                                    <div className="info_bottom">做美国人民的房东</div>
                                                </div>
                                            </div>
                                        </div>
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


export default connect()(FHotfund2);