import React from 'react';
import { connect } from 'dva';



class Fundzhitou extends React.Component {


    render() {

        return (

            <div>
                <div>
                    <div className="pic-module" style={{ background: 'url() no-repeat 50%' }}>
                        <div name="jinrong_waplcjjsnztfw_95210024451_pic01" style={{ width: '100%' }}>
                            <img className="lazy-img lazy-seq-success" width="100%" data-width data-height src="//image1.suning.cn/uimg/cms/img/155840699153870924.jpg" />
                        </div>
                    </div>
                    {/*分享_标题及内容 */}
                    <div className="share-btn" id="shareBtn" />
                    <input name="jinrong_waplcjjsnztfw_95210124458_pic01" type="hidden" id="shareTitle" defaultValue="苏宁智投" />
                    <input name="jinrong_waplcjjsnztfw_95210124458_pic01" type="hidden" id="shareContent" defaultValue="让AI带你体验智能理财" />
                    <input name="jinrong_waplcjjsnztfw_95210124458_pic01" type="hidden" id="imgUrl" defaultValue="//image5.suning.cn/uimg/cms/img/155840728333734157.jpg" />
                    {/* 通用图片模块 */}
                    <div className="pic-module" style={{ background: 'url() no-repeat 50%' }}>
                        <div name="jinrong_waplcjjsnztfw_95210224451_pic01" style={{ width: '100%' }}>
                            <img className="lazy-img lazy-seq-success" width="100%" data-width data-height src="//image2.suning.cn/uimg/cms/img/155840717536368143.jpg" />
                        </div>
                    </div>
                    {/* 通用图片模块 */}
                    <div className="pic-module" style={{ background: 'url() no-repeat 50%' }}>
                        <div name="jinrong_waplcjjsnztfw_95210324451_pic01" style={{ width: '100%' }}>
                            <img className="lazy-img lazy-seq-success" width="100%" data-width data-height src="//image4.suning.cn/uimg/cms/img/155840718400049275.jpg" />
                        </div>
                    </div>
                    {/* 通用图片模块 */}
                    <div className="pic-module" style={{ background: 'url() no-repeat 50%' }}>
                        <div name="jinrong_waplcjjsnztfw_95210424451_pic01" style={{ width: '100%' }}>
                            <img className="lazy-img lazy-seq-success" width="100%" data-width data-height src="//image1.suning.cn/uimg/cms/img/155927940405683108.jpg" />
                        </div>
                    </div>
                    {/* 通用图片模块 */}
                    <div className="pic-module" style={{ background: 'url() no-repeat 50%' }}>
                        <div name="jinrong_waplcjjsnztfw_95210524451_pic01" style={{ width: '100%' }}>
                            <img className="lazy-img lazy-seq-success" width="100%" data-width data-height src="//image1.suning.cn/uimg/cms/img/155840722389521671.jpg" />
                        </div>
                    </div>
                    {/* 通用图片模块 */}
                    <div className="pic-module" style={{ background: 'url() no-repeat 50%' }}>
                        <div name="jinrong_waplcjjsnztfw_95210624451_pic01" style={{ width: '100%' }}>
                            <img className="lazy-img lazy-seq-success" width="100%" data-width data-height src="//image1.suning.cn/uimg/cms/img/155840724346944266.jpg" />
                        </div>
                    </div>
                </div>

            </div>

        )
    }




}





export default connect()(Fundzhitou);