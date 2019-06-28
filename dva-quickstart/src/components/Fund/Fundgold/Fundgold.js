import React from 'react';
import { connect } from 'dva';



class Funddingtou extends React.Component {


    render() {

        return (

            <section className="section">
                <div className="main">
                    <div className="banner">
                        <div className="swiper-container swiper-container-horizontal swiper-container-ios">
                            <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                <div className="swiper-slide swiper-slide-active" style={{ width: 351 }}><img src="https://image2.suning.cn/uimg/cms/img/154587495665582626.png " name="snGold_list_banner_01" className="anchor-hook" /></div>
                            </div> <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                        </div>
                    </div>
                    <ul className="product-list">
                        <li name="snGold_list_product_01" className="product-item anchor-hook">
                            <h4 className="_title">华安黄金</h4>
                            <div className="number">
                                <p><b>315.34</b> <small>元/克</small></p>
                                <p className="plus">
                                    +10.73%
        </p>
                            </div>
                            <div className="desc">
                                <p>金价(06-25)</p>
                                <p>近一月涨跌幅</p>
                            </div>
                            <ol className="tag-wrapper">
                                <li className="tag border-handle">中高风险</li>
                            </ol> <i className="recommend">推荐</i>
                        </li>
                        <li name="snGold_list_product_02" className="product-item anchor-hook">
                            <h4 className="_title">博时黄金</h4>
                            <div className="number">
                                <p><b>315.55</b> <small>元/克</small></p>
                                <p className="plus">
                                    +10.31%
        </p>
                            </div>
                            <div className="desc">
                                <p>金价(06-25)</p>
                                <p>近一月涨跌幅</p>
                            </div>
                            <ol className="tag-wrapper">
                                <li className="tag border-handle">中高风险</li>
                            </ol>
                            {/**/}
                        </li>
                    </ul>
                    {/**/}
                </div>

            </section>


        )
    }




}





export default connect()(Funddingtou);