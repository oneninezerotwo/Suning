import React from 'react';

import { connect } from 'dva';

import 'swiper/dist/css/swiper.min.css'
import './Welfare.css';
import './we.css'

import Swiper from 'swiper/dist/js/swiper.js'


var tabList = [
    {
        name: '电脑',
    },
    {
        name: '数码',
    },
    {
        name: '家用电器',
    },
    {
        name: '母婴',
    }
]


class Search extends React.Component {
    state = {
        List: ['1', '2', '3'],
        tabList: ['电脑', '数码', '家用电器', '母婴'],
        fit: 0
    }

    jump(e) {
        this.setState({
            fit: this.state.fit = e.target.getAttribute("data-key")
        })
        // console.log(e.target.getAttribute("data-key"))
        // console.log(this.state.fit)

        document.documentElement.scrollTop = 766 + (e.target.getAttribute("data-key") * 220)
    }
    render() {

        return (
            <div >
                <section className="wrapper" >
                    {/* 自定义模块 */}
                    {/* 返回页头开始 */}
                    {/* 返回页头开始 */}
                    {/* 返回页头结束 */}
                    {/* 返回页头结束 */}
                    {/* 通用图片模块 */}
                    {/* 头图部分 */}
                    <div className="header" name="jinrong_waphlw0702fuli_109453024394_pic01">
                        <img className="lazy-img lazy-seq-success" width="100%" src="//image1.suning.cn/uimg/cms/img/155002163671542798.jpg" style={{ width: 375, height: 250 }} />
                    </div>
                    {/* 一行多图 */}
                    <div className="product-slide">
                        <div name="jinrong_waphlw0702fuli_109453124417_pic01">
                            <img className="lazy-img lazy-seq-success" src="//image2.suning.cn/uimg/cms/img/155195299231238825.png" style={{ width: 110, height: 140 }} />
                        </div>
                        <div name="jinrong_waphlw0702fuli_109453124417_pic02">
                            <img className="lazy-img lazy-seq-success" src="//image4.suning.cn/uimg/cms/img/155660638151856535.jpg" style={{ width: 110, height: 140 }} />
                        </div>
                        <div name="jinrong_waphlw0702fuli_109453124417_pic03" style={{ position: 'relative', overflow: 'hidden' }}>
                            <img className="lazy-img lazy-seq-success" src="//image4.suning.cn/uimg/cms/img/153965371341647404.jpg" style={{ width: 110, height: 140 }} />
                        </div>
                        <div name="jinrong_waphlw0702fuli_109453124417_pic04">
                            <img className="lazy-img lazy-seq-success" src="//image2.suning.cn/uimg/cms/img/155964228304265578.jpg" style={{ width: 110, height: 140 }} />
                        </div>
                    </div>
                    {/*消息公告*/}
                    {/*图片标题*/}
                    <div className="title" name="jinrong_waphlw0702fuli_109453324415_pic01" data-href>
                        <img className="lazy-img lazy-seq-success" width="100%" src="//image2.suning.cn/uimg/cms/img/153965382450550006.jpg" style={{ width: 375, height: 40 }} />
                    </div>
                    {/*小轮播*/}
                    <div className="tiny-swiper swiper-container-horizontal" id="tinySwiper">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide"><img className="lazy-img lazy-seq-success" width="100%" src="//image3.suning.cn/uimg/cms/img/155831502712948951.jpg" style={{ width: 375, height: 100 }} /></div>
                                <div className="swiper-slide"><img className="lazy-img lazy-seq-success" width="100%" src="//image5.suning.cn/uimg/cms/img/155860537465363406.png" style={{ width: 375, height: 100 }} /></div>
                                <div className="swiper-slide"><img className="lazy-img lazy-seq-success" width="100%" src="//image2.suning.cn/uimg/cms/img/156103253550593825.jpg" style={{ width: 375, height: 100 }} /></div>
                            </div>
                        </div>

                        <div className="tiny-swiper-pagination swiper-pagination" />
                    </div>
                    {/*图片标题*/}
                    <div className="title" name="jinrong_waphlw0702fuli_109453524415_pic01" data-href>
                        <img className="lazy-img lazy-seq-success" width="100%" src="//image2.suning.cn/uimg/cms/img/153965389618388235.jpg" style={{ width: 375, height: 40 }} />
                    </div>
                    {/* 左大右横二 */}
                    <div className="product-split">
                        <div className="left" style={{ width: '50%' }}>
                            {/* 左大图 */}
                            <div name="jinrong_waphlw0702fuli_109453624407_pic01">
                                <img className="lazy-img lazy-seq-success" width="100%" src="//image5.suning.cn/uimg/cms/img/155529392980756572.png" style={{ width: 188, height: '155.413px' }} />
                            </div>
                        </div>
                        <div className="right" style={{ width: '50%' }}>
                            {/* 右横一 */}
                            <div name="jinrong_waphlw0702fuli_109453624408_pic01">
                                <img className="lazy-img lazy-seq-success" width="100%" src="//image4.suning.cn/uimg/cms/img/155660634463761066.jpg" style={{ width: 188, height: '77.7067px' }} />
                            </div>
                            {/* 右横二 */}
                            <div name="jinrong_waphlw0702fuli_109453624409_pic01">
                                <img className="lazy-img lazy-seq-success" width="100%" src="//image5.suning.cn/uimg/cms/img/154606447892284157.jpg" style={{ width: 188, height: '77.7067px' }} />
                            </div>
                        </div>
                    </div>
                    {/*图片标题*/}
                    <div className="title" name="jinrong_waphlw0702fuli_109453724415_pic01" data-href>
                        <img className="lazy-img lazy-seq-success" width="100%" src="//image3.suning.cn/uimg/cms/img/153965412609377627.jpg" style={{ width: 375, height: 40 }} />
                    </div>
                    {/* 一行两商品_导航 */}
                    <input type="hidden" id="txtItem" defaultValue="#e23131" />
                    <div className="navi-contain" style={{ transition: 'opacity 0.6s step-end 0s', opacity: 1 }}>
                        <div className="pro-navi">
                            {
                                tabList.map((item, index) => {
                                    return (
                                        <div className="out" style={{ width: '25%' }}>
                                            <span key={index} data-key={index} onClick={this.jump.bind(this)} className={
                                                index == this.state.fit ? "on" : ""
                                            } name="jinrong_waphlw0702fuli_109453824416_word01">{item.name}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* tab导航_一行两商品 */}
                    <div className="navi">
                        <div className="gap" />
                        {/*标题*/}
                        <div className="gap" />
                        <div className="product-lists">
                            <div className="product-contain">
                                {/*爆炸贴*/}
                                <div className="product-item" name="jinrong_waphlw0702fuli_109453924456_prod01" data-sku="627848265|1|3|">
                                    <img className="lazy-img lazy-seq-success" width="100%" src="//imgservice4.suning.cn/uimg1/b2c/image/kFs5Cf8FAW7_Od4A00PeIQ.jpg_400w_400h_4e" style={{ width: 183, height: 183 }} />
                                    <img className="lazy-img tip tip01 lazy-seq-error" name src style={{ width: 32, height: 32 }} />
                                    <div className="pro-intro" style={{ transition: 'opacity 0.6s step-end 0s', opacity: 1 }}>
                                        <p className="txt" style={{ background: 'rgb(226, 49, 49)', '-webkit-box-orient': 'vertical' }}>Apple MacBook Air 13.3英寸笔记本电脑(I5 8G 128G MQD32CH/A)银色</p>
                                        <p className="price">¥5488.00</p>
                                        <p className="nope">¥6499.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-contain">
                                {/*爆炸贴*/}
                                <div className="product-item" name="jinrong_waphlw0702fuli_109453924456_prod02" data-sku="731861078|1|3|">
                                    <img className="lazy-img lazy-seq-success" width="100%" src="//imgservice1.suning.cn/uimg1/b2c/image/NSs_0YNgm8sUrduwgwiSng.jpg_400w_400h_4e" style={{ width: 183, height: 183 }} />
                                    <img className="lazy-img tip tip01 lazy-seq-error" name src style={{ width: 32, height: 32 }} />
                                    <div className="pro-intro" style={{ transition: 'opacity 0.6s step-end 0s', opacity: 1 }}>
                                        <p className="txt" style={{ background: 'rgb(226, 49, 49)', '-webkit-box-orient': 'vertical' }}>华硕(ASUS)飞行堡垒FX63VD7700 15.6英寸吃鸡游戏本笔记本电脑(i7-7700HQ 1TB+128GB GTX1050-4G独显 黑)手提学生商务办公本</p>
                                        <p className="price">¥</p>
                                        <p className="nope">¥</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* tab导航_一行两商品 */}
                    <div className="navi">
                        <div className="gap" />
                        {/*标题*/}
                        <div className="gap" />
                        <div className="product-lists">
                            <div className="product-contain">
                                {/*爆炸贴*/}
                                <div className="product-item" name="jinrong_waphlw0702fuli_109454024456_prod01" data-sku="10144312171|1|3|">
                                    <img className="lazy-img lazy-seq-success" width="100%" src="//imgservice5.suning.cn/uimg1/b2c/image/cf_SxTbPgaDp9KVQNb9u9g.jpg_400w_400h_4e" style={{ width: 183, height: 183 }} />
                                    <img className="lazy-img tip tip01 lazy-seq-error" name src style={{ width: 32, height: 32 }} />
                                    <div className="pro-intro" style={{ transition: 'opacity 0.6s step-end 0s', opacity: 1 }}>
                                        <p className="txt" style={{ background: 'rgb(226, 49, 49)', '-webkit-box-orient': 'vertical' }}>苏宁小Biu音箱 AI生活助手 人工智能音箱 WiFi/蓝牙音响 儿童故事机 智能对话 音乐电台 声控 搭载DuerOS</p>
                                        <p className="price">¥119.00</p>
                                        <p className="nope">¥301.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-contain">
                                {/*爆炸贴*/}
                                <div className="product-item" name="jinrong_waphlw0702fuli_109454024456_prod02" data-sku="620551006|1|3|">
                                    <img className="lazy-img lazy-seq-success" width="100%" src="//imgservice4.suning.cn/uimg1/b2c/image/5ArtVS8cP1vHw90zjgCUxA.jpg_400w_400h_4e" style={{ width: 183, height: 183 }} />
                                    <img className="lazy-img tip tip01 lazy-seq-error" name src style={{ width: 32, height: 32 }} />
                                    <div className="pro-intro" style={{ transition: 'opacity 0.6s step-end 0s', opacity: 1 }}>
                                        <p className="txt" style={{ background: 'rgb(226, 49, 49)', '-webkit-box-orient': 'vertical' }}>三星(SAMSUNG)指纹锁SHP-DP728（咖啡棕）家用防盗指纹密码电子锁手机蓝牙开门ios;Android均适配</p>
                                        <p className="price">¥2780.00</p>
                                        <p className="nope">¥4180.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* tab导航_一行两商品 */}
                    <div className="navi">
                        <div className="gap" />
                        {/*标题*/}
                        <div className="gap" />
                        <div className="product-lists">
                            <div className="product-contain">
                                {/*爆炸贴*/}
                                <div className="product-item" name="jinrong_waphlw0702fuli_109454124456_prod01" data-sku="160803018|1|3|">
                                    <img className="lazy-img lazy-seq-success" width="100%" src="//imgservice4.suning.cn/uimg1/b2c/image/KfxHhdZT82RJ3Gc_JVLPcA.jpg_400w_400h_4e" style={{ width: 183, height: 183 }} />
                                    <img className="lazy-img tip tip01 lazy-seq-error" name src style={{ width: 32, height: 32 }} />
                                    <div className="pro-intro" style={{ transition: 'opacity 0.6s step-end 0s', opacity: 1 }}>
                                        <p className="txt" style={{ background: 'rgb(226, 49, 49)', '-webkit-box-orient': 'vertical' }}>苏泊尔（SUPOR）电炖盅DZ22YC806-40隔水电炖锅2.2L 一锅三胆 白瓷内胆煮粥锅燕窝炖盅煲汤锅三个内胆</p>
                                        <p className="price">¥189.00</p>
                                        <p className="nope">¥499.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-contain">
                                {/*爆炸贴*/}
                                <div className="product-item" name="jinrong_waphlw0702fuli_109454124456_prod02" data-sku="694729819|1|3|">
                                    <img className="lazy-img lazy-seq-success" width="100%" src="//imgservice5.suning.cn/uimg1/b2c/image/VnRPSKXbdi49BBcZLT7Zeg.jpg_400w_400h_4e" style={{ width: 183, height: 183 }} />
                                    <img className="lazy-img tip tip01 lazy-seq-error" name src style={{ width: 32, height: 32 }} />
                                    <div className="pro-intro" style={{ transition: 'opacity 0.6s step-end 0s', opacity: 1 }}>
                                        <p className="txt" style={{ background: 'rgb(226, 49, 49)', '-webkit-box-orient': 'vertical' }}>格力(GREE)电热油汀NDY13-X6121 时尚加宽叶片 智能恒温 倾倒断电 取暖器 家用电暖气</p>
                                        <p className="price">¥359.00</p>
                                        <p className="nope">¥483.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* tab导航_一行两商品 */}
                    <div className="navi">
                        <div className="gap" />
                        {/*标题*/}
                        <div className="gap" />
                        <div className="product-lists">
                            <div className="product-contain">
                                {/*爆炸贴*/}
                                <div className="product-item" name="jinrong_waphlw0702fuli_109454224456_prod01" data-sku="133071863|1|3|">
                                    <img className="lazy-img lazy-seq-success" width="100%" src="//imgservice2.suning.cn/uimg1/b2c/image/YOmEui6Kimc4nERApP2A_g.jpg_400w_400h_4e" style={{ width: 183, height: 183 }} />
                                    <img className="lazy-img tip tip01 lazy-seq-error" name src style={{ width: 32, height: 32 }} />
                                    <div className="pro-intro" style={{ transition: 'opacity 0.6s step-end 0s', opacity: 1 }}>
                                        <p className="txt" style={{ background: 'rgb(226, 49, 49)', '-webkit-box-orient': 'vertical' }}>诺优能（Nutrilon）幼儿配方奶粉（12—36月龄，3段） 800g</p>
                                        <p className="price">¥</p>
                                        <p className="nope">¥</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product-contain">
                                {/*爆炸贴*/}
                                <div className="product-item" name="jinrong_waphlw0702fuli_109454224456_prod02" data-sku="776741393|1|3|">
                                    <img className="lazy-img lazy-seq-success" width="100%" src="//image1.suning.cn/uimg/b2c/newcatentries/0000000000-000000000776741393_1.jpg_400w_400h_4e" style={{ width: 183, height: 183 }} />
                                    <img className="lazy-img tip tip01 lazy-seq-error" name src style={{ width: 32, height: 32 }} />
                                    <div className="pro-intro" style={{ transition: 'opacity 0.6s step-end 0s', opacity: 1 }}>
                                        <p className="txt" style={{ background: 'rgb(226, 49, 49)', '-webkit-box-orient': 'vertical' }}>瑞贝乐（REEBABY）汽车儿童安全座椅安全带款 906 美国队长（0-12岁）</p>
                                        <p className="price">¥891.30</p>
                                        <p className="nope">¥891.30</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*分享_标题及内容 */}
                    {/* 底部导航 */}
                    <div className="entrance">
                        <ul style={{ transition: 'opacity 0.6s step-end 0s', opacity: 1 }}>
                            <li name="jinrong_waphlw0702fuli_109454424449_pic01">
                                <img className="lazy-img lazy-seq-success" src="//image1.suning.cn/uimg/cms/img/155013245852458677.png" style={{ width: 40, height: 40 }} />
                                <p style={{ color: '' }}>主会场</p>
                            </li>
                            <li name="jinrong_waphlw0702fuli_109454424449_pic02">
                                <img className="lazy-img lazy-seq-success" src="//image1.suning.cn/uimg/cms/img/155013248641584313.png" style={{ width: 40, height: 40 }} />
                                <p style={{ color: '' }}>全部会场</p>
                            </li>
                            <li name="jinrong_waphlw0702fuli_109454424449_pic03">
                                <img className="lazy-img lazy-seq-success" src="//image1.suning.cn/uimg/cms/img/155013256931611117.png" style={{ width: 40, height: 40 }} />
                                <p style={{ color: '' }}>手机电脑</p>
                            </li>
                            <li name="jinrong_waphlw0702fuli_109454424449_pic04">
                                <img className="lazy-img lazy-seq-success" src="//image5.suning.cn/uimg/cms/img/155013261090741285.png" style={{ width: 40, height: 40 }} />
                                <p style={{ color: '' }}>必抢清单</p>
                            </li>
                            <li name="jinrong_waphlw0702fuli_109454424449_pic05">
                                <img className="lazy-img lazy-seq-success" src="//image5.suning.cn/uimg/cms/img/155013262899113581.png" style={{ width: 40, height: 40 }} />
                                <p style={{ color: '' }}>我的活动</p>
                            </li>
                        </ul>
                    </div>

                </section>
            </div>
        )
    }
    componentDidMount() {
        //可以加上你需要的条件等，然后生成Swiper对象，
        //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: true,
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper
        });
        window.addEventListener('scroll', this.handleScroll);
    }
    handleScroll = (event) => {
        //滚动条高度
        let ctx = this;
        let clientHeight = document.documentElement.clientHeight; //可视区域高度
        let scrollTop = document.documentElement.scrollTop;  //滚动条滚动高度
        let scrollHeight = document.documentElement.scrollHeight; //滚动内容高度
        console.log(scrollTop)

    }
}





export default connect()(Search);


