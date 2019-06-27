import React from 'react'

import { connect } from 'react-redux'
// import ajax from '../../utils/request'
class FinancialContentTwo extends React.Component {

    state = {
        listDatas: this.props.home_store.financialData.mods[6].eles[0].data,
        listDatas2: this.props.home_store.financialData.mods[7].eles[1].data,

    }

    render() {
        return (
            <div>
                <div className="floor-wrap">
                    <div sap-modid="C005" className="floor-title-box">
                        <p className="title">金融生活</p>
                        <p className="sub-title">您的财富小管家</p>
                        {/**/}
                    </div>
                    <div>
                        <div className="special-service product-list05">
                            <div className="swiper-container swiper-service swiper-container-horizontal swiper-container-ios swiper-container-wp8-horizontal">
                                <div>
                                    <div className="service swiper-slide swiper-slide-active" style={{ width: 375 }}>
                                        {this.state.listDatas.map((item, index) => {
                                            return (<a key={index} className="cell anchor-hook">
                                                <div className="img-box">
                                                    <img src={item.imgUrl} alt="" />
                                                </div>
                                                <div>
                                                    <p className="name">{item.title}</p>
                                                    <p className="word">{item.content}</p>
                                                </div>
                                            </a>)
                                        })}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="floor-wrap">
                    <div sap-modid="C009" className="floor-title-box">
                        <p className="title">财富头条</p>
                        <p className="sub-title" />
                        <p name="INDEX_C009_gengduo" className="more anchor-hook">更多</p>
                    </div>
                    <div>
                        <div className="news_card product-list08">
                            <div className="news_list" />
                        </div>
                    </div>
                    <div>
                        <div className="news_card product-list08">
                            <div className="news_list">
                                {this.state.listDatas2.map((item, index) => {
                                    return (
                                        <div key={index} className={index % 2 === 0 ? "news_item anchor-hook" : "news_item anchor-hook block"}>
                                            {index % 2 === 0 ? "" : <img src={item.cover} alt="" className="news_img" />}
                                            <div className="news_info">
                                                <div className="news_title">{item.title}</div>
                                                <div className="news_msg">
                                                    <div className="time">{item.distanceTime} · {item.showName}</div>
                                                </div>
                                            </div>
                                            {index % 2 === 0 ? <img src={item.cover} alt="" className="news_img" /> : ""}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="jx-footer">
                    <ul className="list">
                        <li name="licai_index_fankui" className="anchor-hook"><i className="icon-footer icon2" />
                            <p>意见反馈</p>
                        </li>
                        <li name="licai_index_wenti" className="anchor-hook"><i className="icon-footer icon3" />
                            <p>帮助中心</p>
                        </li>
                        <li name="licai_index_weixin" className="anchor-hook"><i className="icon-footer icon4" />
                            <p>关注微信</p>
                        </li>
                    </ul>
                </div>
                <div className="footer-bg"></div>
            </div >
        )

    }
}

export default connect((state) => {
    return state
})(FinancialContentTwo)