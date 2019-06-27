import React from 'react';
import { connect } from 'react-redux'
import Banner from '../Banner/Banner';
import ajax from '../../../utils/request';

class Pesonality extends React.Component {
    state = {
        navData: [],
        youData: []
    }
    async componentDidMount() {
        var data = await ajax('https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/PesonalityNav#!method=get');
        var data2 = await ajax('https://www.easy-mock.com/mock/5cf656aec51c246c3655bf6e/example/PesonalityYou#!method=get');
        this.setState({
            navData: data.data.channelGateLists,
            youData: data2.data.returnList
        })
        console.log(this.state.youData)
    }
    render() {
        return (
            <div className="inm-gather-block" data-type={this.props.home_store.g_block} data-num="person">
                <div className="inm-gather-child personality">
                    <div className="index-banner" style={{ opacity: 1 }}>
                        <div className="container">
                            <div className="banner-view">
                                {<Banner dataName="personality" />}
                            </div>
                        </div>
                    </div>
                    <div className="index-fullad index-fullad-top" style={{ width: '100%', display: 'block' }}><a href=""><img alt="" src="https://image.suning.cn/uimg/sfp/ad/156083948888755419.gif" /></a> </div>
                    
                    <div className="index-menus bigScreen" style={{ width: '100%', marginLeft: 0, background: 'url("https://image.suning.cn/uimg/sfp/ad/156083951828500662.jpg") 0% 0% / 100% no-repeat' }}>
                        {/* home 导航 */}
                        <div className="index-menus-content">
                            {this.state.navData.map((item, index) => {
                                return <div className="menu-item-wrap" key={index}>
                                    <div className="item">
                                        <img alt="" src={item.picUrl} /> </div> <span style={{ color: '#FFFFFF' }}>{item.shortTitle}</span>
                                </div>
                            })}


                        </div>
                    </div>
                    <div className="index-login">
                        <div className="index-login-main">
                            <div className="user">
                                <div className="user-avatar default" />
                                <div className="user-avatar setting inm-hide" />
                                <div className="user-text">
                                    <a className="link">登录</a>
                                </div>
                            </div>
                        </div>
                        <div className="index-login-ad">
                            <div className="adWrap" style={{ background: 'url("https://image.suning.cn/uimg/sfp/ad/154514082330670450.png") center center no-repeat' }}>
                            </div>
                        </div>
                    </div>
                    <div className="index-preference">
                        <div className="index-preference-title">金融优选</div>
                        <div className="index-preference-content">
                            <div className="container">
                                <div className="banner-view swiper-multi">
                                    <div className="wrap" style={{ width: 776}}>
                                        {this.state.youData.map((item, index) => {
                                            return <div className="item lazyimg" key={index} style={{ width: 129 }}>
                                                <div className="img"><img alt="" src={item.picUrl} className="nobg" /></div>
                                            </div>
                                        })}


                                    </div>
                                    <div className="button-ico" style={{ display: 'none' }}><span className="active" /><span /><span /><span /><span /><span />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="floorContent">
                        <div className="index-userdefined" floorcode={1} />
                        <div className="index-guessLike inm-hide" floorcode={2} />
                    </div>
                    <div className="index-bottom">到底了~</div>
                </div>
            </div>
        )
    }
}
export default connect((state) => {
    return state
})(Pesonality);