import React from 'react';

import { connect } from 'dva';
import axios from 'axios';


import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.js'


class Ffundcaifu extends React.Component {
    state = {

    }

    render() {

        return (

            <div>

                <div className="floor-wrap">
                    <div sap-modid="fund-caifuhao" className="floor-title-box">
                        <p className="title">财富号</p>
                        <p className="sub-title" />
                        {/**/}
                    </div>
                    <div>
                        <div className="product-list18">
                            <div className="swiper-container m">
                                <div className="swiper-wrapper m" style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}>
                                    <div className="swiper-slide swiper-slide-active" style={{ width: '145.217px', marginRight: 10 }}><img src="http://ossup.suning.com/lcfos/lcfosbucket/image/253244997de94cf5b4b577b1c87f03bc.png" alt />
                                        <p className="name">博时基金</p>
                                        <p className="tip">让专业更简单</p>
                                    </div>
                                    <div className="swiper-slide swiper-slide-next" style={{ width: '145.217px', marginRight: 10 }}><img src="https://oss.suning.com/lcfos/lcfosbucket/editor/8d70f0180e2e444dbcfe9dcadfca9f5e.jpg" alt />
                                        <p className="name">汇添富基金</p>
                                        <p className="tip">治愈选择困难症</p>
                                    </div>
                                    <div className="swiper-slide" style={{ width: '145.217px', marginRight: 10 }}><img src="https://oss.suning.com/lcfos/lcfosbucket/editor/a182239286ae44b99b552b5bfae3954b.png" alt />
                                        <p className="name">广发基金</p>
                                        <p className="tip">资产配置专家</p>
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


export default connect()(Ffundcaifu);