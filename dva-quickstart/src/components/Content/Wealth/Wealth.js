import React from 'react';
import { connect } from 'react-redux';
import Banner from '../Banner/Banner';
import ajax from '../../../utils/request';
class Wealth extends React.Component {
    state={
        financialData:[],
        moneyData:[],
        newsData:[]
    }
  async componentDidMount(){
        var data=await ajax('https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/financial#!method=get');
        var data2=await ajax("https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/money#!method=get")
        var data3=await ajax("https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/news#!method=get")
        this.setState({
            financialData:data.data.resultMap.financeTableList.productList,
            moneyData:data2.data.insuranceCacheBean.lists,
            newsData:data3.data.articleList.splice(0,3)
        })
        console.log(this.state.newsData)
   }
    render() {
        return (
            <div className="inm-gather-block" data-type={this.props.home_store.g_block} data-num="weath" >
                <div className="inm-gather-child wealth" style={{ top: 0 }}>
                    <div className="index-banner" style={{ opacity: 1 }}>
                        <div className="container">
                            <div className="banner-view">
                            {<Banner dataName="wealth"/>}
                              
                            </div>
                        </div>
                    </div>
                    <div className="floorContent">
                        <div className="index-financial" floorcode={3} style={{ width: 398 }}>
                            <div className="index-financial-title"> <a className="title">理财管家</a> </div>
                            <div className="index-financial-content">
                                <div className="container" style={{overflowX:"scroll",scrollbar:"background-color:transparent"}}>
                                    <div className="banner-view swiper-multi">
                                        <div className="wrap inm-row" >
                                         {this.state.financialData.map((item,index)=>{
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
                                    <div className="item inm-column" data-url="https://plplps.suning.com/plplps/entry/entry.html" data-index={1} style={{ backgroundImage: 'url(https://image.suning.cn/uimg/sfp/ad/155379207208518588.png)' }}>
                                        <div className="box">
                                            <div> </div>
                                            <div> </div>
                                        </div>
                                    </div>
                                    <div className="item inm-column" data-url="https://jinrong.suning.com/waprxf05lj.html" data-index={2} style={{ backgroundImage: 'url(https://image.suning.cn/uimg/sfp/ad/155728275985481228.png)' }}>
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
                                 {this.state.moneyData.map((item,index)=>{
                                     return  <div className="inm-column lazyimg" key={index}>
                                     <div className="icon"><img alt="" src={item.picUrl} inm-original="https://image.suning.cn/uimg/sfp/ad/155378560107923423.png" className="nobg" /></div>
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
                                        <div className="wrap"  style={{ width: 2484, transform: 'translate3d(-828px, 0px, 0px)', transition: 'all 0s ease 0s' }}>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/card/elecCardList.htm?showIndex=0" data-index={1} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/PkRdajWoKnQgTGJVNMU3BhRicXUDvHAhtokcrrzHE9yZUSSmpgcVOQnzZ__YpjKj.jpg" src="https://oss.suning.com/spcmp/spcmp/PkRdajWoKnQgTGJVNMU3BhRicXUDvHAhtokcrrzHE9yZUSSmpgcVOQnzZ__YpjKj.jpg" className="nobg" /></div>
                                                <div className="name">苏宁礼品卡</div>
                                                <div className="info">线上线下 一卡畅购</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/card/entityCardList.htm?showIndex=0" data-index={2} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/yvFAURUKxtP94BVu2DHcwJPUkBA4LtWWYQrOAAjVxTmljs8nHgSFc8kjFcZh6Obh.jpg" src="https://oss.suning.com/spcmp/spcmp/yvFAURUKxtP94BVu2DHcwJPUkBA4LtWWYQrOAAjVxTmljs8nHgSFc8kjFcZh6Obh.jpg" className="nobg" /></div>
                                                <div className="name">苏宁礼品卡</div>
                                                <div className="info">浓情生活 尚礼优选</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/giveCardList.htm" data-index={3} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/bQqzR1_K-m1nZSqtGawGH9tSLgil1OodLtfXhcbY6nZyyibOpvGczE8W6bfCdgtl.jpg" src="https://oss.suning.com/spcmp/spcmp/bQqzR1_K-m1nZSqtGawGH9tSLgil1OodLtfXhcbY6nZyyibOpvGczE8W6bfCdgtl.jpg" className="nobg" /></div>
                                                <div className="name">SU说社交赠礼</div>
                                                <div className="info">专属问候 蜜糖祝福</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/card/elecCardList.htm?showIndex=0" data-index={4} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/9y7YHgJiQQRbbC70cCvNP3AZjGV4bwyueDMOUwigPrG-gBULNfJ3lSi8W4_VqobP.jpg" src="https://oss.suning.com/spcmp/spcmp/9y7YHgJiQQRbbC70cCvNP3AZjGV4bwyueDMOUwigPrG-gBULNfJ3lSi8W4_VqobP.jpg" className="nobg" /></div>
                                                <div className="name">苏宁礼品卡</div>
                                                <div className="info">走亲访友 感恩答谢</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/card/entityCardList.htm?showIndex=0" data-index={5} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/VjStV3thv7gwyR-zKjV8zDitYiny2PfeJQPe52tDB_TfmUL9O_FItUS9D8-6UsrQ.jpg" src="https://oss.suning.com/spcmp/spcmp/VjStV3thv7gwyR-zKjV8zDitYiny2PfeJQPe52tDB_TfmUL9O_FItUS9D8-6UsrQ.jpg" className="nobg" /></div>
                                                <div className="name">苏宁礼品卡</div>
                                                <div className="info">浓情生活 尚礼优选</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/giveCardList.htm" data-index={6} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/ZZf9g7QsnHixt7CFxx_HQMid4atNXF0DE-A2_Sfu_LUKJ2jAtK8A5Xu2LVIoafOW.png" src="https://oss.suning.com/spcmp/spcmp/ZZf9g7QsnHixt7CFxx_HQMid4atNXF0DE-A2_Sfu_LUKJ2jAtK8A5Xu2LVIoafOW.png" className="nobg" /></div>
                                                <div className="name">SU说社交赠礼</div>
                                                <div className="info">专属问候 蜜糖祝福</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/card/elecCardList.htm?showIndex=0" data-index={1} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/PkRdajWoKnQgTGJVNMU3BhRicXUDvHAhtokcrrzHE9yZUSSmpgcVOQnzZ__YpjKj.jpg" src="https://oss.suning.com/spcmp/spcmp/PkRdajWoKnQgTGJVNMU3BhRicXUDvHAhtokcrrzHE9yZUSSmpgcVOQnzZ__YpjKj.jpg" className="nobg" /></div>
                                                <div className="name">苏宁礼品卡</div>
                                                <div className="info">线上线下 一卡畅购</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/card/entityCardList.htm?showIndex=0" data-index={2} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/yvFAURUKxtP94BVu2DHcwJPUkBA4LtWWYQrOAAjVxTmljs8nHgSFc8kjFcZh6Obh.jpg" src="https://oss.suning.com/spcmp/spcmp/yvFAURUKxtP94BVu2DHcwJPUkBA4LtWWYQrOAAjVxTmljs8nHgSFc8kjFcZh6Obh.jpg" className="nobg" /></div>
                                                <div className="name">苏宁礼品卡</div>
                                                <div className="info">浓情生活 尚礼优选</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/giveCardList.htm" data-index={3} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/bQqzR1_K-m1nZSqtGawGH9tSLgil1OodLtfXhcbY6nZyyibOpvGczE8W6bfCdgtl.jpg" src="https://oss.suning.com/spcmp/spcmp/bQqzR1_K-m1nZSqtGawGH9tSLgil1OodLtfXhcbY6nZyyibOpvGczE8W6bfCdgtl.jpg" className="nobg" /></div>
                                                <div className="name">SU说社交赠礼</div>
                                                <div className="info">专属问候 蜜糖祝福</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/card/elecCardList.htm?showIndex=0" data-index={4} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/9y7YHgJiQQRbbC70cCvNP3AZjGV4bwyueDMOUwigPrG-gBULNfJ3lSi8W4_VqobP.jpg" src="https://oss.suning.com/spcmp/spcmp/9y7YHgJiQQRbbC70cCvNP3AZjGV4bwyueDMOUwigPrG-gBULNfJ3lSi8W4_VqobP.jpg" className="nobg" /></div>
                                                <div className="name">苏宁礼品卡</div>
                                                <div className="info">走亲访友 感恩答谢</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/card/entityCardList.htm?showIndex=0" data-index={5} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/VjStV3thv7gwyR-zKjV8zDitYiny2PfeJQPe52tDB_TfmUL9O_FItUS9D8-6UsrQ.jpg" src="https://oss.suning.com/spcmp/spcmp/VjStV3thv7gwyR-zKjV8zDitYiny2PfeJQPe52tDB_TfmUL9O_FItUS9D8-6UsrQ.jpg" className="nobg" /></div>
                                                <div className="name">苏宁礼品卡</div>
                                                <div className="info">浓情生活 尚礼优选</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/giveCardList.htm" data-index={6} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/ZZf9g7QsnHixt7CFxx_HQMid4atNXF0DE-A2_Sfu_LUKJ2jAtK8A5Xu2LVIoafOW.png" src="https://oss.suning.com/spcmp/spcmp/ZZf9g7QsnHixt7CFxx_HQMid4atNXF0DE-A2_Sfu_LUKJ2jAtK8A5Xu2LVIoafOW.png" className="nobg" /></div>
                                                <div className="name">SU说社交赠礼</div>
                                                <div className="info">专属问候 蜜糖祝福</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/card/elecCardList.htm?showIndex=0" data-index={1} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/PkRdajWoKnQgTGJVNMU3BhRicXUDvHAhtokcrrzHE9yZUSSmpgcVOQnzZ__YpjKj.jpg" src="https://oss.suning.com/spcmp/spcmp/PkRdajWoKnQgTGJVNMU3BhRicXUDvHAhtokcrrzHE9yZUSSmpgcVOQnzZ__YpjKj.jpg" className="nobg" /></div>
                                                <div className="name">苏宁礼品卡</div>
                                                <div className="info">线上线下 一卡畅购</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/card/entityCardList.htm?showIndex=0" data-index={2} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/yvFAURUKxtP94BVu2DHcwJPUkBA4LtWWYQrOAAjVxTmljs8nHgSFc8kjFcZh6Obh.jpg" src="https://oss.suning.com/spcmp/spcmp/yvFAURUKxtP94BVu2DHcwJPUkBA4LtWWYQrOAAjVxTmljs8nHgSFc8kjFcZh6Obh.jpg" className="nobg" /></div>
                                                <div className="name">苏宁礼品卡</div>
                                                <div className="info">浓情生活 尚礼优选</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/giveCardList.htm" data-index={3} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/bQqzR1_K-m1nZSqtGawGH9tSLgil1OodLtfXhcbY6nZyyibOpvGczE8W6bfCdgtl.jpg" src="https://oss.suning.com/spcmp/spcmp/bQqzR1_K-m1nZSqtGawGH9tSLgil1OodLtfXhcbY6nZyyibOpvGczE8W6bfCdgtl.jpg" className="nobg" /></div>
                                                <div className="name">SU说社交赠礼</div>
                                                <div className="info">专属问候 蜜糖祝福</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/card/elecCardList.htm?showIndex=0" data-index={4} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/9y7YHgJiQQRbbC70cCvNP3AZjGV4bwyueDMOUwigPrG-gBULNfJ3lSi8W4_VqobP.jpg" src="https://oss.suning.com/spcmp/spcmp/9y7YHgJiQQRbbC70cCvNP3AZjGV4bwyueDMOUwigPrG-gBULNfJ3lSi8W4_VqobP.jpg" className="nobg" /></div>
                                                <div className="name">苏宁礼品卡</div>
                                                <div className="info">走亲访友 感恩答谢</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/card/entityCardList.htm?showIndex=0" data-index={5} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/VjStV3thv7gwyR-zKjV8zDitYiny2PfeJQPe52tDB_TfmUL9O_FItUS9D8-6UsrQ.jpg" src="https://oss.suning.com/spcmp/spcmp/VjStV3thv7gwyR-zKjV8zDitYiny2PfeJQPe52tDB_TfmUL9O_FItUS9D8-6UsrQ.jpg" className="nobg" /></div>
                                                <div className="name">苏宁礼品卡</div>
                                                <div className="info">浓情生活 尚礼优选</div>
                                            </div>
                                            <div className="item lazyimg" data-url="http://kam.suning.com/giveCardList.htm" data-index={6} style={{ width: 138 }}>
                                                <div className="img"><img alt="" data-src="https://oss.suning.com/spcmp/spcmp/ZZf9g7QsnHixt7CFxx_HQMid4atNXF0DE-A2_Sfu_LUKJ2jAtK8A5Xu2LVIoafOW.png" src="https://oss.suning.com/spcmp/spcmp/ZZf9g7QsnHixt7CFxx_HQMid4atNXF0DE-A2_Sfu_LUKJ2jAtK8A5Xu2LVIoafOW.png" className="nobg" /></div>
                                                <div className="name">SU说社交赠礼</div>
                                                <div className="info">专属问候 蜜糖祝福</div>
                                            </div>
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
                                {this.state.newsData.map((item,index)=>{
                                    return  <div className="item lazyimg" key={index}>
                                    <div className="info">
                                        <p className="title">{item.title}</p>
                                        <p className="source">{item.showTime}<a>{item.userName}</a></p>
                                    </div>
                                    <div className="picture"> <img alt="" src={item.affixUrl}  /> </div>
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
export default connect((state)=>{
    return state
})( Wealth);