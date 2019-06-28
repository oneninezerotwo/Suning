import React from 'react';
import { connect } from 'dva';
// import styles from '../../routes/Insureance/Insurance';
class Inshotsale extends React.Component {
    render() {
        return (
            <section className="recommend" style={{ marginBottom: '80px' }}>
                <p className="title title3">
                    <span className="rec">
                        热销产品
                  </span>
                    <span className="ref" >更多
      <i className="arrow-r" />
                    </span>
                </p>
                <div className="list">
                    <dl>
                        <a id="issm-none-rxcp-1" >
                            <dt><img src="https://image.suning.cn/uimg/eppagtms/eppagtms/152835716016068721.jpg" alt="" /></dt>
                            <dd>
                                <p className="tit">
                                    <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/153355803499585948.jpg" alt="" />
                                    <span>成人综合意外险</span>
                                </p>
                                <p ><span className="tag">综合意外｜交通意外｜猝死</span></p>
                                <p className="pri"><span style={{ fontSize: 18, color: '#ff6666' }}>58</span><font style={{ fontSize: 10, color: '#ff6666', margin: 3 }}>元起</font></p>
                            </dd>
                        </a>
                    </dl>
                    <dl>
                        <a id="issm-none-rxcp-2">
                            <dt><img src="https://image.suning.cn/uimg/eppagtms/eppagtms/154833281206641861.jpg" alt="" /></dt>
                            <dd>
                                <p className="tit">
                                    <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/153355803499585948.jpg" alt="" />
                                    <span>全家保综合意外险</span>
                                </p>
                                <p ><span className="tag">成人|意外险|意外医疗</span></p>
                                <p className="pri"><span style={{ fontSize: 18, color: '#ff6666' }}>88</span><font style={{ fontSize: 10, color: '#ff6666', margin: 3 }}>元起</font></p>
                            </dd>
                        </a>
                    </dl>
                    <dl>
                        <a id="issm-none-rxcp-3" >
                            <dt><img src="https://image.suning.cn/uimg/eppagtms/eppagtms/153433449622080124.jpg" alt="" /></dt>
                            <dd>
                                <p className="tit">
                                    <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/153418016030415059.png" alt="" />
                                    <span>苏宁少儿住院保</span>
                                </p>
                                <p ><span className="tag">不限医保 | 最高200万 | 少儿成长</span></p>
                                <p className="pri"><span style={{ fontSize: 18, color: '#ff6666' }}>128</span><font style={{ fontSize: 10, color: '#ff6666', margin: 3 }}>元起</font></p>
                            </dd>
                        </a>
                    </dl>
                    <dl>
                        <a id="issm-none-rxcp-4">
                            <dt><img src="https://image.suning.cn/uimg/eppagtms/eppagtms/151331951077231249.jpg" alt="" /></dt>
                            <dd>
                                <p className="tit">
                                    <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/153417600120816458.png" alt="" />
                                    <span>糖尿病并发症保障</span>
                                </p>
                                <p ><span className="tag">糖尿病患者专享｜脑中风后遗症</span></p>
                                <p className="pri"><span style={{ fontSize: 18, color: '#ff6666' }}>77</span><font style={{ fontSize: 10, color: '#ff6666', margin: 3 }}>元起</font></p>
                            </dd>
                        </a>
                    </dl>
                    <dl>
                        <a id="issm-none-rxcp-5" >
                            <dt><img src="https://image.suning.cn/uimg/eppagtms/eppagtms/154571893757775688.jpg" alt="" /></dt>
                            <dd>
                                <p className="tit">
                                    <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/153355803499585948.jpg" alt="" />
                                    <span>苏宁泰康在线百万医疗保险</span>
                                </p>
                                <p ><span className="tag">抄底价｜医疗报销｜重疾绿通</span></p>
                                <p className="pri"><span style={{ fontSize: 18, color: '#ff6666' }}>114</span><font style={{ fontSize: 10, color: '#ff6666', margin: 3 }}>元起</font></p>
                            </dd>
                        </a>
                    </dl>
                    <dl>
                        <a id="issm-none-rxcp-6" >
                            <dt><img src="https://image.suning.cn/uimg/eppagtms/eppagtms/151808862022727787.jpg" alt="" /></dt>
                            <dd>
                                <p className="tit">
                                    <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/153355803499585948.jpg" alt="" />
                                    <span>交通工具综合意外保障</span>
                                </p>
                                <p ><span className="tag">海陆空｜全球通保｜网约车</span></p>
                                <p className="pri"><span style={{ fontSize: 18, color: '#ff6666' }}>30</span><font style={{ fontSize: 10, color: '#ff6666', margin: 3 }}>元起</font></p>
                            </dd>
                        </a>
                    </dl>
                    <dl>
                        <a id="issm-none-rxcp-7" >
                            <dt><img src="https://image.suning.cn/uimg/eppagtms/eppagtms/152794906128675024.jpg" alt="" /></dt>
                            <dd>
                                <p className="tit">
                                    <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/153355803499585948.jpg" alt="" />
                                    <span>私家车驾乘意外险（含拖车服务）</span>
                                </p>
                                <p >
                                    <span className="tag">私家车专享｜驾乘意外｜拖车服务</span></p>
                                <p className="pri">
                                    <span style={{ fontSize: 18, color: '#ff6666' }}>29</span>
                                    <font style={{ fontSize: 10, color: '#ff6666', margin: 3 }}>元起</font>
                                </p>
                            </dd>
                        </a>
                    </dl>
                    <dl>
                        <a id="issm-none-rxcp-8" >
                            <dt><img src="https://image.suning.cn/uimg/eppagtms/eppagtms/151315597789815304.jpg" alt="" /></dt>
                            <dd>
                                <p className="tit">
                                    <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/153417600120816458.png" alt="" />
                                    <span>自住安心家财险</span>
                                </p>
                                <p ><span className="tag">房屋损失｜室内财产｜盗抢损失</span></p>
                                <p className="pri">
                                    <span style={{ fontSize: 18, color: '#ff6666' }}>60</span>
                                    <font style={{ fontSize: 10, color: '#ff6666', margin: 3 }}>元</font>
                                </p>
                            </dd>
                        </a>
                    </dl>
                </div>
            </section>


        )
    }

}

// IndexPage.propTypes = {
// };

export default connect()(Inshotsale);
