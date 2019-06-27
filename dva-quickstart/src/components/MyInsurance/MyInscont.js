import React from 'react';
import { connect } from 'dva';


// import styles from '../../routes/Insureance/Insurance';
class MyInscont extends React.Component {
    state = {

    }
    render() {
        return (
            <div style={{ marginBottom: 50 }} className="mypage">
                <section className="A">
                    <p className="A1 border-handle">我的保单</p>
                    <div className="A2 border-handle">
                        <div name="issm-my-mybd-unpaid" className="A3" data-href="/secret/myOrders.htm?cat=1">
                            <p className="A4"><img src="https://issm.suning.com/res/v2/styles/images/my5.png" alt="" /></p>
                            <p className="A5">待支付</p>
                        </div><div name="issm-my-mybd-insure" className="A3" data-href="/secret/myOrders.htm?cat=2">
                            <p className="A4"><img src="https://issm.suning.com/res/v2/styles/images/my2.png" alt="" /></p>
                            <p className="A5">保障中</p>
                        </div><div name="issm-my-mybd-expired" className="A3 border-handle" data-href="/secret/myOrders.htm?cat=3">
                            <p className="A4"><img src="https://issm.suning.com/res/v2/styles/images/my3.png" alt="" /></p>
                            <p className="A5">已过期</p>
                        </div><div name="issm-my-mybd-all" className="A3" data-href="/secret/myOrders.htm?cat=0">
                            <p className="A4"><img src="https://issm.suning.com/res/v2/styles/images/my1.png" alt="" /></p>
                            <p className="A5">全部保单</p>
                        </div>
                    </div>
                    <p name="issm-my-claim" className="A6 hidden" data-href="/secret/myInsclaims.htm"><span className="A7">我的理赔</span><span className="A8"><i className="arrow-r" /></span></p>
                    <p name="issm-my-news" className="A6 border-handle" data-href="/secret/myNews.htm"><span className="A7 news">我的消息</span><span className="A8"><i className="arrow-r" /></span></p>
                    <p name="issm-my-contact" className="A6 border-handle" data-href="/secret/regularContact.htm"><span className="A7 contact">常用联系人</span><span className="A8"><i className="arrow-r" /></span></p>
                </section>
                <section className="B">
                    <p className="B2 border-handle">关于我们</p>
                    <p name="issm-my-index" className="B4">
                        <a href="https://issm.suning.com/articleDetail_A10258.htm"><img src="https://image.suning.cn/uimg/eppagtms/eppagtms/150156190244538815.jpg" alt="" /></a>
                    </p>
                </section>
                <section className="B">
                    <p className="B2 border-handle">合作伙伴</p>
                    <div className="B3">
                        <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/150155867202650482.jpg" alt="" />
                        <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/150155880435398430.jpg" alt="" />
                        <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/150155887798548160.jpg" alt="" />
                        <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/150155892002618735.jpg" alt="" />
                        <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/150155902369613561.jpg" alt="" />
                        <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/150156174642462590.jpg" alt="" />
                        <div className="B3 more _more_ hidden">
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/150155931012811267.jpg" alt="" />
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/150156159657806650.jpg" alt="" />
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/150155923377322676.jpg" alt="" />
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/150156170192317252.jpg" alt="" />
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/152146615613486149.jpg" alt="" />
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/152146637174837220.jpg" alt="" />
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/152146661370998163.jpg" alt="" />
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/150155918678781743.jpg" alt="" />
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/150155915537176136.jpg" alt="" />
                            <img src="https://image.suning.cn/uimg/eppagtms/eppagtms/150173190169875752.jpg" alt="" />
                        </div>
                    </div>
                </section>

            </div>
        )
    }

    componentDidMount() {


    }

}

// IndexPage.propTypes = {
// };

export default connect((state) => {
    return state;
})(MyInscont);
