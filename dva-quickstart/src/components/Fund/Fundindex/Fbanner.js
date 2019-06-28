import React from 'react';

import { connect } from 'dva';
import axios from 'axios';


import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.js'


class Fbanner extends React.Component {
    state = {

    }

    render() {

        return (

            <div>

                <div>
                    <div className="banner-list product-list03">
                        <div className="swiper-container swiper-banner swiper-container-horizontal swiper-container-ios swiper-container-wp8-horizontal">
                            <div className="swiper-wrapper" style={{ transitionDuration: '0ms', transform: 'translate3d(-692px, 0px, 0px)' }}>
                                <div className="banner-image anchor-hook swiper-slide swiper-slide-duplicate" sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-banner&quot;,&quot;eleid&quot;:&quot;fund-banner&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-banner_1-6_undefined_undefined_undefined_fund-banner&quot;}" name="FUND_fund-banner_fund-banner_5" data-swiper-slide-index={5} style={{ width: 346 }}><img src="https://image2.suning.cn/uimg/cms/img/155860077553051170.png" alt /></div>
                                <div className="banner-image anchor-hook swiper-slide swiper-slide-prev" sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-banner&quot;,&quot;eleid&quot;:&quot;fund-banner&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-banner_1-1_undefined_undefined_undefined_fund-banner&quot;}" name="FUND_fund-banner_fund-banner_0" data-swiper-slide-index={0} style={{ width: 346 }}><img src="https://image2.suning.cn/uimg/cms/img/156108834862661112.jpg" alt /></div>
                                <div className="banner-image anchor-hook swiper-slide swiper-slide-active" sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-banner&quot;,&quot;eleid&quot;:&quot;fund-banner&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-banner_1-2_undefined_undefined_undefined_fund-banner&quot;}" name="FUND_fund-banner_fund-banner_1" data-swiper-slide-index={1} style={{ width: 346 }}><img src="https://image2.suning.cn/uimg/cms/img/156108920362645126.png" alt /></div>
                                <div className="banner-image anchor-hook swiper-slide swiper-slide-next" sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-banner&quot;,&quot;eleid&quot;:&quot;fund-banner&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-banner_1-3_undefined_undefined_undefined_fund-banner&quot;}" name="FUND_fund-banner_fund-banner_2" data-swiper-slide-index={2} style={{ width: 346 }}><img src="https://image2.suning.cn/uimg/cms/img/155963300005402298.jpg " alt /></div>
                                <div className="banner-image anchor-hook swiper-slide" sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-banner&quot;,&quot;eleid&quot;:&quot;fund-banner&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-banner_1-4_undefined_undefined_undefined_fund-banner&quot;}" name="FUND_fund-banner_fund-banner_3" data-swiper-slide-index={3} style={{ width: 346 }}><img src="https://image2.suning.cn/uimg/cms/img/156102902846150684.png" alt /></div>
                                <div className="banner-image anchor-hook swiper-slide" sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-banner&quot;,&quot;eleid&quot;:&quot;fund-banner&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-banner_1-5_undefined_undefined_undefined_fund-banner&quot;}" name="FUND_fund-banner_fund-banner_4" data-swiper-slide-index={4} style={{ width: 346 }}><img src="https://image2.suning.cn/uimg/cms/img/155860089421875233.png" alt /></div>
                                <div className="banner-image anchor-hook swiper-slide" sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-banner&quot;,&quot;eleid&quot;:&quot;fund-banner&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-banner_1-6_undefined_undefined_undefined_fund-banner&quot;}" name="FUND_fund-banner_fund-banner_5" data-swiper-slide-index={5} style={{ width: 346 }}><img src="https://image2.suning.cn/uimg/cms/img/155860077553051170.png" alt /></div>
                                <div className="banner-image anchor-hook swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" sa-data="{&quot;pageid&quot;:&quot;&quot;,&quot;modid&quot;:&quot;fund-banner&quot;,&quot;eleid&quot;:&quot;fund-banner&quot;,&quot;recvalue&quot;:&quot;jrbaoguang__fund-banner_1-1_undefined_undefined_undefined_fund-banner&quot;}" name="FUND_fund-banner_fund-banner_0" data-swiper-slide-index={0} style={{ width: 346 }}><img src="https://image2.suning.cn/uimg/cms/img/156108834862661112.jpg" alt /></div>
                            </div>
                            <div className="swiper-pagination swiper-pagination-banner swiper-pagination-bullets"><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet swiper-pagination-bullet-active" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /><span className="swiper-pagination-bullet" /></div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }


}


export default connect()(Fbanner);