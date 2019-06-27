import React from 'react';
import { connect } from 'dva';
import axios from 'axios';

// import styles from '../../routes/Insureance/Insurance';
class InsListChannel extends React.Component {
    state = {
        highlightnum: this.props.home_store.channelnum,
        tab1: true,
        tab2: false,
        channel: ["全部", "健康险", "意外险", "财产险", "旅行险"],
        channelway: ["按热门", "筛选"],
        InsCompany: ["平安保险", "平安健康", "泰康在线", "众安在线", "安盛天平", "安心财险", "德华安顾", "大都会人寿", "中意财险", "国联人寿", "安达保险"],
        SpecProtect: ["意外保障", "重大疾病", "少儿健康", "中老年健康", "女性健康", "母婴健康", "疾病门急诊", "医疗费用垫付", "轻症保障", "三高人群", "住院津贴", "高风险运动保障", "紧急救援", "第三者责任", "账户安全", "航班行李延误", "证件遗失", "行李及随身物品损失", "水暖气管破裂", "重疾绿色通道", "房屋损坏"],
        agerange: ["0-17周岁", "18-50周岁", "51-65周岁", "66周岁及以上"],
        gender: ['男', '女'],
        axiosurl: ["https://www.easy-mock.com/mock/5cf635e68e1a394003cec472/example/prolist#!method=get",
            "https://www.easy-mock.com/mock/5cf635e68e1a394003cec472/example/health#!method=get",
            "https://www.easy-mock.com/mock/5cf635e68e1a394003cec472/example/accident#!method=get",
            "https://www.easy-mock.com/mock/5cf635e68e1a394003cec472/example/property#!method=get",
            "https://www.easy-mock.com/mock/5cf635e68e1a394003cec472/example/Instreval#!method=gets"
        ]
    }
    render() {
        return (
            <div className="channelbox">
                <section className="item-box fixed-search">
                    <div className="main-item border-handle">
                        <div style={{ WebkitTransform: 'translateX(0px)' }}>
                            <div className="main-content moveprocess" style={{ transform: 'translateX(0px)' }}>
                                {this.state.channel.map((item, index) => {
                                    return (<span key={index} data-url="/getInsList.htm" onClick={this.highlight.bind(this, index, item)} className={this.state.highlightnum === index || this.props.home_store.channelnum === index ? "on" : ""} data-value="ALL">
                                        <a id={"issm-prod-type-" + (index + 1)} name="licaiwap_fundlist_tab_index">{item}</a></span>)
                                })}
                            </div>
                        </div>
                        <i />
                        <i className="blank" />
                        {/*<div class="btn"><span class="txt">筛选</span><i class="icon-filter"></i></div>*/}
                    </div>
                    <ul className="choose-tab" style={{ padding: "50px 0 10px 0" }} ref="turncolor">
                        {/* {this.state.channelway.map((item, index) => {
                        return (<li key={index} id={"tab" + (index + 1)} className="on" >
                            <span>{item}</span>
                            <i className={this.state.highlightfilt ? "arrow-up" : "arrow-down"} /></li>)
                    })} */}

                        <li id="tab1" className="on"><span>按热门</span><i className={this.state.tab1 ? "arrow-down" : "arrow-up"} /></li>
                        <li id="tab2" className={this.state.tab2 ? "on" : ""}><span className="txt">筛选</span><i className={this.state.tab2 ? "arrow-up" : "arrow-down"} /></li>
                    </ul>
                    <ul className={this.state.tab1 ? "ranklist hidden" : "ranklist"}>
                        <li className="on border-handle" data-type={1}>按热门</li>
                        <li className="border-handle" data-type={2}>按新品</li>
                    </ul>
                    <div className={this.state.tab2 ? "choose-box" : "choose-box hidden"}>
                        <div className="choose-content border-handle">
                            <div className="choose-scroll-box" style={{ height: '442px !important', touchAction: 'none' }}>
                                <div className="choose-scroll-content" style={{ transitionTimingFunction: 'cubic-bezier(0.1, 0.57, 0.1, 1)', transitionDuration: '0ms', transform: 'translate(0px, 0px) translateZ(0px)' }}>
                                    <div className="title"><span className="line" /><span className="txt">保险公司</span><span className="line" />
                                    </div>
                                    <ul className="choose-list" data-value="FL0031">
                                        {this.state.InsCompany.map((item, index) => {
                                            return <li key={index} data-value="FL00310197"><div><span>{item}</span></div></li>
                                        })}

                                    </ul>
                                    <div className="title"><span className="line" /><span className="txt">特色保障</span><span className="line" />
                                    </div>
                                    <ul className="choose-list" data-value="FL0027">
                                        {this.state.SpecProtect.map((item, index) => {
                                            return <li data-value="FL00270160" key={index}><div><span>{item}</span></div></li>
                                        })}


                                    </ul>
                                    <div className="title"><span className="line" /><span className="txt">保障年龄</span><span className="line" />
                                    </div>
                                    <ul className="choose-list" data-value="FL0024">
                                        {this.state.agerange.map((item, index) => {
                                            return (
                                                <li key={index} data-value="FL00240128"><div><span>{item}</span></div></li>
                                            )
                                        })}

                                    </ul>
                                    <div className="title"><span className="line" /><span className="txt">性别</span><span className="line" />
                                    </div>
                                    <ul className="choose-list" data-value="FL0023">
                                        {this.state.gender.map((item, index) => {
                                            return (<li key={index} data-value="FL00230126"><div><span>{item}</span></div></li>)
                                        })}
                                        {/* <li data-value="FL00230126"><div><span>男</span></div></li>
                                        <li data-value="FL00230127"><div><span>女</span></div></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="choose-btn border-handle">
                                <div className="white">重置</div>
                                <div className="blue">确定</div>
                            </div>
                        </div>
                    </div>
                </section >
                <div className={this.state.tab1 ? "choose-mask hidden" : "choose-mask"}></div>
            </div>
        )
    }
    async  highlight(num, channelval) {
        this.props.dispatch({
            type: "home_store/setchannelnum",
            channelnum: 10
        });
        // console.log(num, channelval);
        this.setState({
            highlightnum: num
        });

        let news;

        switch (num) {
            case 0:
                news = (await axios.get(this.state.axiosurl[0])).data.productList;
                // localStorage.setItem("prolistAll", JSON.stringify(news));
                break;
            case 1:
                news = (await axios.get(this.state.axiosurl[1])).data.productList;
                // localStorage.setItem("health", JSON.stringify(news));
                break;
            case 2:
                news = (await axios.get(this.state.axiosurl[2])).data.productList;
                // localStorage.setItem("accident", JSON.stringify(news));
                break;
            case 3:
                news = (await axios.get(this.state.axiosurl[3])).data.productList;
                // localStorage.setItem("property", JSON.stringify(news));
                break;
            case 4:
                news = (await axios.get(this.state.axiosurl[4])).data.productList;
                // localStorage.setItem("treval", JSON.stringify(news));
                break;
            default:
                news = (await axios.get(this.state.axiosurl[0])).data.productList;
                // localStorage.setItem("prolistAll", JSON.stringify(news));
                break;
        }
        this.setState({
            news: news
        });
        this.props.dispatch({
            type: "home_store/setchannelData",
            insData: news
        });

    }
    filt() {
        this.setState({
            highlightfilt: !this.state.highlightfilt
        })
    }

    async componentDidMount() {

        let data = (await axios.get(this.state.axiosurl[this.props.home_store.channelnum])).data.productList;
        this.props.dispatch({
            type: "home_store/setchannelData",
            insData: data
        });
        this.refs.turncolor.onclick = e => {
            if (e.target.innerText === "按热门") {
                // console.log(e.target.innerText);
                this.setState({
                    tab1: !this.state.tab1
                })

            }
            else {
                this.setState({
                    tab2: !this.state.tab2
                })
            }


        }
    }

}

// IndexPage.propTypes = {
// };

export default connect((state) => {
    return state;
})(InsListChannel);
