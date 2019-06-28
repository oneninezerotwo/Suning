import React from 'react';

import { connect } from 'dva';

import { withRouter } from 'dva/router';



class Fheader extends React.Component {

    render() {

        return (


            <div>

                <dl className="product-floor">
                    <dt>产品名称</dt>
                    <dd name="jijin_icon_mk01_01" className="anchor-hook"><img src="https://image2.suning.cn/uimg/cms/img/155114903704731283.png" alt className="product-icon" />
                        <div className="product-name">基金超市</div>
                        {/**/}
                    </dd>
                    <dd name="jijin_icon_mk01_02" className="anchor-hook"><img src="https://image2.suning.cn/uimg/cms/img/153502748039262852.png" alt className="product-icon" />
                        <div className="product-name">财富号</div>
                        {/**/}
                    </dd>
                    <dd name="jijin_icon_mk01_03" className="anchor-hook"><img src="https://image2.suning.cn/uimg/cms/img/151730574246630383.png" alt className="product-icon" />
                        <div className="product-name">热销榜单</div>
                        {/**/}
                    </dd>
                    <dd name="jijin_icon_mk01_04" className="anchor-hook"><img src="https://image2.suning.cn/uimg/cms/img/153502731002522606.png" alt className="product-icon" />
                        <div className="product-name">新发基金</div>
                        {/**/}
                    </dd>
                    <dd name="jijin_icon_mk01_05" className="anchor-hook"><img src="https://image2.suning.cn/uimg/cms/img/155902873701337932.png" alt className="product-icon" />
                        <div className="product-name">在线客服</div>
                        {/**/}
                    </dd>
                    <dd name="jijin_icon_mk01_06" className="anchor-hook"><img src="https://image2.suning.cn/uimg/cms/img/153682168616672081.png" alt className="product-icon" />
                        <div className="product-name">基金诊断</div>
                        {/**/}
                    </dd>
                    <dd name="jijin_icon_mk01_07" className="anchor-hook"><img src="https://image2.suning.cn/uimg/cms/img/153431870847737148.png" alt className="product-icon" />
                        <div className="product-name">讨论区</div>
                        {/**/}
                    </dd>
                    <dd name="jijin_icon_mk01_08" className="anchor-hook"><img src="https://image2.suning.cn/uimg/cms/img/154104265198642538.png" alt className="product-icon" />
                        <div className="product-name">目标盈</div>
                        {/**/}
                    </dd>
                    <dd name="jijin_icon_mk01_09" className="anchor-hook"><img src="https://image2.suning.cn/uimg/cms/img/153502728426178696.png" alt className="product-icon" />
                        <div className="product-name">短期理财</div>
                        {/**/}
                    </dd>
                </dl>


            </div>


        )
    }


}





export default withRouter(connect()(Fheader));