import React from 'react';
import { connect } from 'dva';
// import styles from '../../routes/Insureance/Insurance';

class Topnew extends React.Component {
    render() {
        return (
            <div className="findpage">
                <section className="A">
                    <p className="A1"><span className="A2">金融头条</span></p>
                    <div className="A3 border-handle">
                        <div className="A4">
                            <a href="/articleDetail_A10803.htm">
                                <p className="A7">抗癌靶向药，却在进入医保后消失了！</p>
                            </a>
                        </div>
                        <div className="A5">
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/156030651916162356.jpg?width=750&height=690" alt="" />
                        </div>
                    </div>
                    <div className="A3 border-handle">
                        <div className="A4">
                            <a href="/articleDetail_A10733.htm">
                                <p className="A7">关于汛期应对车辆涉水受损的保险消费提示</p>
                            </a>
                        </div>
                        <div className="A5">
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/155203324522770879.jpg?width=240&height=148" alt="" />
                        </div>
                    </div>
                    <div className="A3 border-handle">
                        <div className="A4">
                            <a href="/articleDetail_A10732.htm">
                                <p className="A7">关于警惕“保险分红”骗局的风险提示</p>
                            </a>
                        </div>
                        <div className="A5">
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/155203290424897990.jpg?width=140&height=120" alt="" />
                        </div>
                    </div>
                </section>

                <section className="A B">
                    <p className="B1"><span className="B2">热销活动</span></p>
                    {/*<p class="C1"><img class="C2" src="./styles/images/banner01.jpg" alt=""=""></p>*/}
                    {/* banner 切换 */}
                    <div id="iSlider-effect-wrapper" style={{ margin: 0 }}>
                        <div id="animation-effect" className="iSlider-effect"><ul style={{ width: 375, height: 150 }}><li style={{ width: 375, height: 150, transform: 'translateZ(0px) translateX(-375px)' }} /><li style={{ width: 375, height: 150, transform: 'translateZ(0px) translateX(0px)' }}><img height={150} src="https://image.suning.cn/uimg/eppagtms/eppagtms/154600148165927366.jpg" data-href="https://jinrong.suning.com/wapbxceb.html?utm_source=faxian&utm_medium=app?linkTip=" alt="" /></li><li style={{ width: 375, height: 150, transform: 'translateZ(0px) translateX(375px)' }} /></ul></div>
                        <p className="_dot_"><span className="on" /></p>
                    </div>
                </section>
                <section className="A B" style={{ paddingBottom: 50 }}>
                    <p className="B1 border-handle"><span className="B2">保险课堂</span></p>
                    <div className="A3 border-handle">
                        <div className="A4">
                            <a >
                                <p className="A7">明白这两个问题，你就知道怎么选保险了</p>
                            </a>
                        </div>
                        <div className="A5">
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/155203246550928848.jpg?width=240&height=240" alt="" />
                        </div>
                    </div>
                    <div className="A3 border-handle">
                        <div className="A4">
                            <a >
                                <p className="A7">人生必备六张保单，你有了吗？</p>
                            </a>
                        </div>
                        <div className="A5">
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/155202752056258906.jpg?width=240&height=240" alt="" />
                        </div>
                    </div>
                    <div className="A3 border-handle">
                        <div className="A4">
                            <a >
                                <p className="A7">保险条款不难懂，看准这五条就行</p>
                            </a>
                        </div>
                        <div className="A5">
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/155202787050797056.jpg?width=240&height=240" alt="" />
                        </div>
                    </div>
                    <div className="A3 border-handle">
                        <div className="A4">
                            <a >
                                <p className="A7">车险投保最常见的三大误区，您中招了吗？</p>
                            </a>
                        </div>
                        <div className="A5">
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/155202811150983114.jpg?width=120&height=120" alt="" />
                        </div>
                    </div>
                    <div className="A3 border-handle">
                        <div className="A4">
                            <a >
                                <p className="A7">给孩子买保险必看的五大技巧</p>
                            </a>
                        </div>
                        <div className="A5">
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/155202844497612803.jpg?width=260&height=230" alt="" />
                        </div>
                    </div>
                </section>

            </div>

        )
    }
    componentDidMount() {

    }
    state = {

    }
}

// IndexPage.propTypes = {
// };

export default connect()(Topnew);
