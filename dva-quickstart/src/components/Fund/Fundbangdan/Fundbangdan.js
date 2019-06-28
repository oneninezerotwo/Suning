import React from 'react';
import { connect } from 'dva';
import axios from 'axios';

class Fundbangdan extends React.Component {


    render() {

        return (

            <div>
                <div className="banner">
                    <div className="swiper-container content swiper-container-initialized swiper-container-horizontal swiper-container-ios">
                        <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                            <div className="swiper-slide swiper-slide-active" style={{ width: 343 }}><img src="https://image2.suning.cn/uimg/cms/img/155357009143806627.jpg" /></div>
                        </div> <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                    </div>
                    <div className="swiper-pagination" />
                </div>

                <div className="rank_swiper"><div className="swiper-container content swiper-container-initialized swiper-container-horizontal swiper-container-ios">
                    <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}>
                        <div className="swiper-slide rank_slide swiper-slide-active" style={{ height: 467, width: 375 }}>
                            <div className="rank_list">
                                <div className="rank_item">
                                    <div>
                                        <div className="item_top l_top item_l">
                                            大家都在买
              </div>
                                        <div className="item_bottom l_bottom item_l">
                                            购买人数最多的基金
              </div>
                                    </div>
                                    <div>
                                        <div className="item_top r_top item_r">
                                            7.41万人
              </div> <div className="item_bottom r_bottom item_r">
                                            购买
              </div></div></div><div className="rank_item"><div><div className="item_top l_top item_l">
                                    轻松跑赢大盘
              </div> <div className="item_bottom l_bottom item_l">
                                        跟涨不跟跌
              </div></div> <div><div className="item_top r_top item_r">
                                        +35.22%
              </div> <div className="item_bottom r_bottom item_r">
                                            近1年
              </div></div></div><div className="rank_item"><div><div className="item_top l_top item_l">
                                    近2年上涨月份最多的基金
              </div> <div className="item_bottom l_bottom item_l">
                                        连续2年上涨月份最多
              </div></div> <div><div className="item_top r_top item_r">
                                        +9.48%
              </div> <div className="item_bottom r_bottom item_r">
                                            近2年
              </div></div></div><div className="rank_item"><div><div className="item_top l_top item_l">
                                    定投明星榜
              </div> <div className="item_bottom l_bottom item_l">
                                        收获时间的玫瑰
              </div></div> <div><div className="item_top r_top item_r">
                                        8.98万人
              </div> <div className="item_bottom r_bottom item_r">
                                            定投
              </div></div></div><div className="rank_item"><div><div className="item_top l_top item_l">
                                    十年十倍基
              </div> <div className="item_bottom l_bottom item_l">
                                        耐力长跑
              </div></div> <div><div className="item_top r_top item_r">
                                        30倍
              </div> <div className="item_bottom r_bottom item_r">
                                            成立以来
              </div></div></div><div className="rank_item"><div><div className="item_top l_top item_l">
                                    连续5年正收益
              </div> <div className="item_bottom l_bottom item_l">
                                        无论市场如何，连续5年正收益
              </div></div> <div><div className="item_top r_top item_r">
                                        +252.48%
              </div> <div className="item_bottom r_bottom item_r">
                                            近5年
              </div></div></div><div className="rank_item"><div><div className="item_top l_top item_l">
                                    大家都在看
              </div> <div className="item_bottom l_bottom item_l">
                                        热门基金
              </div></div> <div><div className="item_top r_top item_r">
                                        19.96万人
              </div> <div className="item_bottom r_bottom item_r">
                                            访问
              </div></div></div> <p className="load_tip">
                                </p></div></div><div className="swiper-slide rank_slide swiper-slide-next" style={{ height: 467, width: 375 }}><div className="rank_list"><div className="rank_item"><div><div className="item_top l_top item_l">
                                    大家都在买
              </div> <div className="item_bottom l_bottom item_l">
                                        购买人数最多的基金
              </div></div> <div><div className="item_top r_top item_r">
                                        7.41万人
              </div> <div className="item_bottom r_bottom item_r">
                                            购买
              </div></div></div><div className="rank_item"><div><div className="item_top l_top item_l">
                                        轻松跑赢大盘
              </div> <div className="item_bottom l_bottom item_l">
                                            跟涨不跟跌
              </div></div> <div><div className="item_top r_top item_r">
                                            +35.22%
              </div> <div className="item_bottom r_bottom item_r">
                                                近1年
              </div></div></div><div className="rank_item"><div><div className="item_top l_top item_l">
                                        定投明星榜
              </div> <div className="item_bottom l_bottom item_l">
                                            收获时间的玫瑰
              </div></div> <div><div className="item_top r_top item_r">
                                            8.98万人
              </div> <div className="item_bottom r_bottom item_r">
                                                定投
              </div></div></div><div className="rank_item"><div><div className="item_top l_top item_l">
                                        大家都在看
              </div> <div className="item_bottom l_bottom item_l">
                                            热门基金
              </div></div> <div><div className="item_top r_top item_r">
                                            19.96万人
              </div> <div className="item_bottom r_bottom item_r">
                                                访问
              </div></div></div> <p className="load_tip">
                                    </p></div></div><div className="swiper-slide rank_slide" style={{ height: 467, width: 375 }}><div className="rank_list"><div className="rank_item"><div><div className="item_top l_top item_l">
                                        近2年上涨月份最多的基金
              </div> <div className="item_bottom l_bottom item_l">
                                            连续2年上涨月份最多
              </div></div> <div><div className="item_top r_top item_r">
                                            +9.48%
              </div> <div className="item_bottom r_bottom item_r">
                                                近2年
              </div></div></div><div className="rank_item"><div><div className="item_top l_top item_l">
                                            十年十倍基
              </div> <div className="item_bottom l_bottom item_l">
                                                耐力长跑
              </div></div> <div><div className="item_top r_top item_r">
                                                30倍
              </div> <div className="item_bottom r_bottom item_r">
                                                    成立以来
              </div></div></div><div className="rank_item"><div><div className="item_top l_top item_l">
                                            连续5年正收益
              </div> <div className="item_bottom l_bottom item_l">
                                                无论市场如何，连续5年正收益
              </div></div> <div><div className="item_top r_top item_r">
                                                +252.48%
              </div> <div className="item_bottom r_bottom item_r">
                                                    近5年
              </div></div></div> <p className="load_tip">
                                        </p></div></div></div>    <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div></div>


            </div >

        )
    }


}





export default connect((state) => {
    return state
})(Fundbangdan);