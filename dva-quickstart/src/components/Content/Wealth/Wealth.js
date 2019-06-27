import React from 'react';
import { connect } from 'react-redux';
import Banner from '../Banner/Banner';
// import { Carousel, WingBlank } from 'antd-mobile';
import ajax from '../../../utils/request';
class Wealth extends React.Component {
    state = {
        financialData: [],
        moneyData: [],
        newsData: [],
        giftData: []
    }

    async componentDidMount() {
        this.props.dispatch({
            type: 'home_store/loingShow',
            loing_isok: true
        })
        var data = await ajax('https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/financial#!method=get');
        var data2 = await ajax("https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/money#!method=get")
        var data3 = await ajax("https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/news#!method=get")
        var data4 = await ajax("https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/xin#!method=get")
        this.setState({
            financialData: data.data.resultMap.financeTableList.productList,
            moneyData: data2.data.insuranceCacheBean.lists,
            newsData: data3.data.articleList.splice(0, 3),
            giftData: data4.data.sunCardList
        })
        console.log(this.state.giftData)
        if (data && data2 && data3) {
            this.props.dispatch({
                type: 'home_store/loingShow',
                loing_isok: false
            })
        }
    }
    render() {
        return (
            <div className="inm-gather-block" data-type={this.props.home_store.g_block} data-num="weath">
                <div className="inm-gather-child wealth" style={{ top: 0 }}>
                    <div className="index-banner" style={{ opacity: 1 }}>
                        <div className="container">
                            <div className="banner-view">
                                {<Banner dataName="wealth" />}

                            </div>
                        </div>
                    </div>
                    <div className="floorContent">
                        <div className="index-financial" floorcode={3} style={{ width: 398 }}>
                            <div className="index-financial-title"> <a className="title">理财管家</a> </div>
                            <div className="index-financial-content">
                                <div className="container" style={{ overflowX: "scroll", scrollbar: "background-color:transparent" }}>
                                    <div className="banner-view swiper-multi">
                                        <div className="wrap inm-row" >
                                            {this.state.financialData.map((item, index) => {
                                                return <div className="item inm-column" key={index} style={{ width: 172 }}>
                                                    <div>
                                                        <div className="center main">{item.productName}</div>
                                                        <div className="center number inm-strong">{item.rateValue}</div>
                                                        <div className="center info">{item.rateType}</div>
                                                    </div>
                                                </div>
                                            })}



                                        </div>
                                        <div className="button-ico" style={{ display: 'none' }}><span className="active" /><span /><span /><span /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="index-borrow" floorcode={4}>
                            <div className="index-borrow-title"> <a className="title">借钱不愁</a> </div>
                            <div className="index-borrow-content">
                                <div className="inm-row">
                                    <div className="item inm-column" style={{ backgroundImage: 'url(https://image.suning.cn/uimg/sfp/ad/155379207208518588.png)' }}>
                                        <div className="box">
                                            <div> </div>
                                            <div> </div>
                                        </div>
                                    </div>
                                    <div className="item inm-column" style={{ backgroundImage: 'url(https://image.suning.cn/uimg/sfp/ad/155728275985481228.png)' }}>
                                        <div className="box">
                                            <div> 抢12期免息券</div>
                                            <div>开通返50元</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="index-insurance" floorcode={5}>
                            <div className="index-insurance-title"> <a href className="title">保险无忧</a> </div>
                            <div className="index-insurance-content">
                                <div className="ads" style={{ backgroundImage: 'url(https://image.suning.cn/uimg/sfp/ad/155378533289366345.png)' }}> <a href="https://issm.suning.com">
                                    <div>有保障</div>
                                    <div>更安心</div>
                                </a> </div>
                                <div className="menus">

                                    {/*保险无忧 */}
                                    {this.state.moneyData.map((item, index) => {
                                        return <div className="inm-column lazyimg" key={index}>
                                            <div className="icon"><img alt="" src={item.picUrl} className="nobg" /></div>
                                            <div className="title">{item.name}</div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="index-snCard" floorcode={6}>
                            <div className="index-snCard-title"> <a className="title">心礼物</a> </div>
                            <div className="index-snCard-content">
                                <div className="container">
                                    <div className="banner-view">
                                        <div className="wrap" style={{ width: 1175 }}>
                                            {/* <WingBlank>
                                                <Carousel autoplay={true}> */}
                                            {this.state.giftData.map((item, index) => {
                                                return (<div key={index} className="item lazyimg" style={{ width: 138 }}>
                                                    <div className="img"><img alt="" src={item.imageUrl} className="nobg" /></div>
                                                    <div className="name">{item.mainTitle}</div>
                                                    <div className="info">{item.subTitle}</div>
                                                </div>)
                                            })}

                                            {/* </Carousel>
                                            </WingBlank> */}
                                        </div>
                                        <div className="button-ico" style={{ display: 'none' }}><span className="active" /><span /><span /><span /><span /><span />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="index-payment" ><a href="https://jinrong.suning.com/wapbxyb1901bg.html" className="lazyimg"> <img alt="" className="item nobg" src="https://image.suning.cn/uimg/sfp/ad/155832014512272173.png" inm-original="https://image.suning.cn/uimg/sfp/ad/155832014512272173.png" /> </a> </div>
                        <div className="index-news" >
                            <div className="index-news-title">金融资讯</div>
                            <div className="index-news-content">
                                {this.state.newsData.map((item, index) => {
                                    return <div className="item lazyimg" key={index}>
                                        <div className="info">
                                            <p className="title">{item.title}</p>
                                            <p className="source">{item.showTime}<a>{item.userName}</a></p>
                                        </div>
                                        <div className="picture"> <img alt="" src={item.affixUrl} /> </div>
                                    </div>
                                })}



                            </div>
                        </div>
                    </div>
                    <div className="index-bottom">到底了~</div>
                </div>
            </div>


        )
    }
}
export default connect((state) => {
    return state
})(Wealth);