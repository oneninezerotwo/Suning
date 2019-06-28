import React from 'react';

import { connect } from 'dva';
import axios from 'axios';


import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.js'


class Ffundship extends React.Component {
    state = {

    }

    render() {

        return (

            <div>
                <div className="floor-wrap">
                    <div sap-modid="fund-ship" className="floor-title-box">
                        <p className="title">大咖秀</p>
                        <p className="sub-title" />
                    </div>
                    <div>
                        <div className="product-list15">
                            <div className="swiper-container swiper-video">
                                <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(0px, 0px, 0px)' }}>
                                    <div className="video-slide">
                                        <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-ship&quot;,&quot;eleid&quot;:&quot;fund-ship&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-ship_1-1_undefined_undefined_undefined_fund-ship&quot;}" name="FUND_fund-ship_fund-ship_0" className="img-box anchor-hook" style={{ backgroundImage: 'url("https://image2.suning.cn/uimg/cms/img/155861630174376511.jpg")' }}>
                                            <div className="title-box">
                                                <p className="title">如何把握科创先“基”</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="video-slide">
                                        <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-ship&quot;,&quot;eleid&quot;:&quot;fund-ship&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-ship_1-2_undefined_undefined_undefined_fund-ship&quot;}" name="FUND_fund-ship_fund-ship_1" className="img-box anchor-hook" style={{ backgroundImage: 'url("https://image2.suning.cn/uimg/cms/img/155861631909232726.jpg")' }}>
                                            <div className="title-box">
                                                <p className="title">2019金融研究院座谈会</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="video-slide">
                                        <div sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-ship&quot;,&quot;eleid&quot;:&quot;fund-ship&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-ship_1-3_undefined_undefined_undefined_fund-ship&quot;}" name="FUND_fund-ship_fund-ship_2" className="img-box anchor-hook" style={{ backgroundImage: 'url("https://image2.suning.cn/uimg/cms/img/155861631078958100.jpg")' }}>
                                            <div className="title-box">
                                                <p className="title">如何抓住MSCI投资机会</p>
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


export default connect()(Ffundship);