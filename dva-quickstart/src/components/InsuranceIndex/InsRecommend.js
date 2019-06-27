import React from 'react';
import { connect } from 'dva';
import axios from 'axios';
// import 'swiper/dist/js/swiper.js';
// import 'swiper/dist/css/swiper.min.css';
import img1 from '../../assets/images/rec-list-bg1.png';
import img2 from '../../assets/images/rec-list-bg2.png';
import img3 from '../../assets/images/rec-list-bg3.png';
import img4 from '../../assets/images/rec-list-bg4.png';

import img5 from '../../assets/images/rec-list-bg5.png';

class InsRecommend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            imgs: [img1, img2, img3, img4, img5],
            for_data: [1, 1, 1]

        }
    }
    showdata() {

        for (let i = 0; i < 3; i++) {
            this.state.news.map((item, index) => {
                console.log(item);
                return (
                    ` <a href="javascript:(0)" id="issm-none-wntj-${(index + 1)}" className="swiper-slide swiper-slide-duplicate" name="jrsrc=bxhome_1007_1-1_1035_P10375_99_1007" data-baoguang="jrbaoguang_bxhome_1007_1-1_1035_P10375_99_1007" data-swiper-slide-index=${index} style= "margin-right: 8px >
                        <img src="${this.state.imgs[0]}" alt="" />
                        <div className="slide-content">
                            <div className="slide-info">
                                <div className="info1">${item.rcmdTitle}</div>
                                <div className="info2">${item.rcmdSubtitle}</div>
                            </div>
                            <img src="${item.rcmdImg}" alt="" />
                        </div>
                    </a>`
                )

            }).join('')
        }
    }


    render() {
        return (
            <section className="recommend _reco_">
                <p className="title _aaa_">
                    <span className="rec">
                        为您推荐
                     </span>
                </p>
                <div className="lis _rec-list_">
                    <div ref="act" className="swiper-container swiper-container-horizontal" id="recTemplSwiper" data-swiper="[object Object]">
                        <div className="swiper-wrapper" style={{ transform: 'translate3d(-1280px, 0px, 0px)', transitionDuration: '0ms' }}>
                            {
                                // this.showdata()
                                this.state.for_data.map((item1, index1) => {

                                    return (this.state.news.map((item, index) => {

                                        return (
                                            <a key={index} id={"issm-none-wntj-" + (index + 1)} className="swiper-slide swiper-slide-duplicate" style={{ marginRight: '8px' }} >
                                                <img src={this.state.imgs[index > this.state.imgs.length - 1 ? 0 : index]} alt="" />
                                                <div className="slide-content">
                                                    <div className="slide-info">
                                                        <div className="info1">{item.rcmdTitle}</div>
                                                        <div className="info2">{item.rcmdSubtitle}</div>
                                                    </div>
                                                    <img src={item.rcmdImg} alt="" />
                                                </div>
                                            </a>
                                        )



                                    })
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>


            </section>

        )
    }

    async  componentDidMount() {
        // console.log(this.refs.act.getElementsByClassName('swiper-wrapper')[0]);
        // let scrollbox = this.refs.act.getElementsByClassName('swiper-wrapper')[0];
        // console.log(scrollbox);
        // setInterval(() => {

        // }, 1000)




        //如果检测到localstorage有ne的键值则直接渲染localstorage 的值
        if (localStorage.getItem("ne")) {
            // console.log(localStorage.getItem("ne"))
            const news2 = JSON.parse(localStorage.getItem("ne"))
            // console.log(news2);
            this.setState({
                news: [...this.state.news, ...news2]
            })
            // news = JSON.parse(localStorage.getItem("ne"));
            // console.log(this.state.news);
        }
        //没有检测到则请求数据
        else {
            const news = (await axios.get("https://www.easy-mock.com/mock/5cf635e68e1a394003cec472/example/Finicalscroll#!method=get")).data.recommendList
            localStorage.setItem("ne", JSON.stringify([...this.state.news, ...news]));
            // console.log(news);
            // console.log(this.state.news);
            this.setState({
                news: [...this.state.news, ...news]
            })


        }


    }


}



export default connect()(InsRecommend);
