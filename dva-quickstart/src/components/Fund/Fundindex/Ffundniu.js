import React from 'react';

import { connect } from 'dva';
import axios from 'axios';


import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.js'


class Ffundniu extends React.Component {
    state = {

    }

    render() {

        return (

            <div>

                <div className="floor-wrap">
                    <div sap-modid="fund-niu" className="floor-title-box">
                        <p className="title">长牛基</p>
                        <p className="sub-title">历经牛熊 长跑健将</p>
                        {/**/}
                    </div>
                    <div>
                        <div className="hot-activity-box product-list04">
                            <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-niu&quot;,&quot;eleid&quot;:&quot;fund-niu&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-niu_1-1_undefined_undefined_undefined_fund-niu&quot;}" name="FUND_fund-niu_fund-niu_0" className="hot-activity anchor-hook"><img src="https://image2.suning.cn/uimg/cms/img/155860137894420439.png" alt className="img1" />
                                <div className="mid">
                                    <div className="word-box"><span className="word1">10元买只领跑基</span>
                                        {/**/}
                                    </div>
                                    <p className="tip">汇添富蓝筹稳健混合</p>
                                </div> <i className="icon-link" />
                            </div>
                            <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-niu&quot;,&quot;eleid&quot;:&quot;fund-niu&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-niu_1-2_undefined_undefined_undefined_fund-niu&quot;}" name="FUND_fund-niu_fund-niu_1" className="hot-activity anchor-hook"><img src="https://image2.suning.cn/uimg/cms/img/155866835514571412.png" alt className="img1" />
                                <div className="mid">
                                    <div className="word-box"><span className="word1">13年未换基金经理 十倍基</span>
                                        {/**/}
                                    </div>
                                    <p className="tip">富国天惠精选成长</p>
                                </div> <i className="icon-link" />
                            </div>
                            <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-niu&quot;,&quot;eleid&quot;:&quot;fund-niu&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-niu_1-3_undefined_undefined_undefined_fund-niu&quot;}" name="FUND_fund-niu_fund-niu_2" className="hot-activity anchor-hook"><img src="https://image2.suning.cn/uimg/cms/img/155860143532789822.png" alt className="img1" />
                                <div className="mid">
                                    <div className="word-box"><span className="word1">好基金 无需择时 贵在坚持</span>
                                        {/**/}
                                    </div>
                                    <p className="tip">中欧时代先锋股票A</p>
                                </div> <i className="icon-link" />
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        )
    }


}


export default connect()(Ffundniu);