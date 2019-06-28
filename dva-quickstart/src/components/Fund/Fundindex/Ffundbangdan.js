import React from 'react';

import { connect } from 'dva';
import axios from 'axios';


import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.js'


class Ffundbangdan extends React.Component {
    state = {

    }

    render() {

        return (

            <div>

                <div className="floor-wrap">
                    <div sap-modid="fund-bangdan" className="floor-title-box">
                        <p className="title">热门榜单</p>
                        <p className="sub-title">为您精挑细选</p>
                        {/**/}
                    </div>
                    <div>
                        <div className="product-list17">
                            <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-bangdan&quot;,&quot;eleid&quot;:&quot;fund-bangdan&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-bangdan_1-1_undefined_undefined_undefined_fund-bangdan&quot;}" name="FUND_fund-bangdan_fund-bangdan_0" className="top-list">
                                <div className="left">
                                    <p className="title">大家都在买 </p>
                                    <p className="tip">购买人数最多的基金</p>
                                </div>
                                <div className="right">
                                    <p className="num">7.36万人</p>
                                    <p className="tip">购买</p>
                                </div>
                            </div>
                            <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-bangdan&quot;,&quot;eleid&quot;:&quot;fund-bangdan&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-bangdan_1-2_undefined_undefined_undefined_fund-bangdan&quot;}" name="FUND_fund-bangdan_fund-bangdan_1" className="top-list">
                                <div className="left">
                                    <p className="title">轻松跑赢大盘</p>
                                    <p className="tip">跟涨不跟跌</p>
                                </div>
                                <div className="right">
                                    <p className="num">+38.72%</p>
                                    <p className="tip">近1年</p>
                                </div>
                            </div>
                            <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-bangdan&quot;,&quot;eleid&quot;:&quot;fund-bangdan&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-bangdan_1-3_undefined_undefined_undefined_fund-bangdan&quot;}" name="FUND_fund-bangdan_fund-bangdan_2" className="top-list">
                                <div className="left">
                                    <p className="title">近2年上涨月份最多的基金</p>
                                    <p className="tip">连续2年上涨月份最多</p>
                                </div>
                                <div className="right">
                                    <p className="num">+9.51%</p>
                                    <p className="tip">近2年</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        )
    }


}


export default connect()(Ffundbangdan);