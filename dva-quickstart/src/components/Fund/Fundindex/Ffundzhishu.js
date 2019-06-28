import React from 'react';

import { connect } from 'dva';
import axios from 'axios';


import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.js'


class Ffundzhishu extends React.Component {
    state = {

    }

    render() {

        return (

            <div>
                <div className="floor-wrap">
                    <div sap-modid="fund-zhishu" className="floor-title-box">
                        <p className="title">指数基金</p>
                        <p className="sub-title" />
                        {/**/}
                    </div>
                    <div>
                        <div className="product-list16">
                            <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-zhishu&quot;,&quot;eleid&quot;:&quot;fund-zhishu&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-zhishu_1-1_undefined_undefined_undefined_fund-zhishu&quot;}" name="FUND_fund-zhishu_fund-zhishu_0" className="img-box" style={{ backgroundImage: 'url("https://image2.suning.cn/uimg/cms/img/155860913877033619.png")' }}>
                                <div className="cont">
                                    <p className="title">沪深300</p>
                                    <p className="sub-title">投资大盘股</p>
                                </div>
                            </div>
                            <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-zhishu&quot;,&quot;eleid&quot;:&quot;fund-zhishu&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-zhishu_1-2_undefined_undefined_undefined_fund-zhishu&quot;}" name="FUND_fund-zhishu_fund-zhishu_1" className="img-box" style={{ backgroundImage: 'url("https://image2.suning.cn/uimg/cms/img/155860922082371117.png")' }}>
                                <div className="cont">
                                    <p className="title">中证500</p>
                                    <p className="sub-title">王牌指数之选</p>
                                </div>
                            </div>
                            <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-zhishu&quot;,&quot;eleid&quot;:&quot;fund-zhishu&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-zhishu_1-3_undefined_undefined_undefined_fund-zhishu&quot;}" name="FUND_fund-zhishu_fund-zhishu_2" className="img-box" style={{ backgroundImage: 'url("https://image2.suning.cn/uimg/cms/img/155860924127679555.png")' }}>
                                <div className="cont">
                                    <p className="title">中证1000</p>
                                    <p className="sub-title">坐拥1000只行业黑马</p>
                                </div>
                            </div>
                            <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-zhishu&quot;,&quot;eleid&quot;:&quot;fund-zhishu&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-zhishu_1-4_undefined_undefined_undefined_fund-zhishu&quot;}" name="FUND_fund-zhishu_fund-zhishu_3" className="img-box" style={{ backgroundImage: 'url("https://image2.suning.cn/uimg/cms/img/155860913877033619.png")' }}>
                                <div className="cont">
                                    <p className="title">食品指数</p>
                                    <p className="sub-title">紧跟食品饮料</p>
                                </div>
                            </div>
                            <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-zhishu&quot;,&quot;eleid&quot;:&quot;fund-zhishu&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-zhishu_1-5_undefined_undefined_undefined_fund-zhishu&quot;}" name="FUND_fund-zhishu_fund-zhishu_4" className="img-box" style={{ backgroundImage: 'url("https://image2.suning.cn/uimg/cms/img/155860922082371117.png")' }}>
                                <div className="cont">
                                    <p className="title">证券公司</p>
                                    <p className="sub-title">反弹看它</p>
                                </div>
                            </div>
                            <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-zhishu&quot;,&quot;eleid&quot;:&quot;fund-zhishu&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-zhishu_1-6_undefined_undefined_undefined_fund-zhishu&quot;}" name="FUND_fund-zhishu_fund-zhishu_5" className="img-box" style={{ backgroundImage: 'url("https://image2.suning.cn/uimg/cms/img/155860924127679555.png")' }}>
                                <div className="cont">
                                    <p className="title">中证计算机</p>
                                    <p className="sub-title">5G投资机会</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }


}


export default connect()(Ffundzhishu);