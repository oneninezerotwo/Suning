import React from 'react';

import { connect } from 'dva';

import { withRouter } from 'dva/router';


class Fundguji extends React.Component {

    render() {

        return (

            <div>
                <div>
                    <div className="pic-module" style={{ background: 'url() no-repeat 50%' }}>
                        <div name="jinrong_waplcjjgjyx_95210024451_pic01" style={{ width: '100%' }}>
                            <img className="lazy-img lazy-seq-success" width="100%" data-width data-height src="//image4.suning.cn/uimg/cms/img/156151637976407139.png" />
                        </div>
                    </div>
                    {/*分享_标题及内容 */}
                    {/* 通用图片模块 */}
                    <div className="pic-module" style={{ background: 'url() no-repeat 50%' }}>
                        <div name="jinrong_waplcjjgjyx_95210224451_pic01" style={{ width: '100%' }}>
                            <img className="lazy-img lazy-seq-success" width="100%" data-width data-height src="//image3.suning.cn/uimg/cms/img/156151497065472317.png" />
                        </div>
                    </div>
                    {/* 通用图片模块 */}
                    <div className="pic-module" style={{ background: 'url() no-repeat 50%' }}>
                        <div name="jinrong_waplcjjgjyx_95210324451_pic01" style={{ width: '100%' }}>
                            <img className="lazy-img lazy-seq-success" width="100%" data-width data-height src="//image5.suning.cn/uimg/cms/img/156151498132382303.png" />
                        </div>
                    </div>
                    {/* 通用图片模块 */}
                    <div className="pic-module" style={{ background: 'url() no-repeat 50%' }}>
                        <div name="jinrong_waplcjjgjyx_95210424451_pic01" style={{ width: '100%' }}>
                            <img className="lazy-img lazy-seq-success" width="100%" data-width data-height src="//image1.suning.cn/uimg/cms/img/156151499219124812.png" />
                        </div>
                    </div>
                    {/* 通用图片模块 */}
                    <div className="pic-module" style={{ background: 'url() no-repeat 50%' }}>
                        <div name="jinrong_waplcjjgjyx_95210524451_pic01" style={{ width: '50%', float: 'left' }}>
                            <img className="lazy-img lazy-seq-success" width="100%" data-width data-height src="//image1.suning.cn/uimg/cms/img/155901607138471874.png" />
                        </div>
                        <div name="jinrong_waplcjjgjyx_95210524451_pic02" style={{ width: '50%', float: 'right' }}>
                            <img className="lazy-img lazy-seq-success" width="100%" data-width data-height src="//image1.suning.cn/uimg/cms/img/155901609630842452.png" />
                        </div>
                    </div>
                    {/* 通用图片模块 */}
                    <div className="pic-module" style={{ background: 'url() no-repeat 50%' }}>
                        <div name="jinrong_waplcjjgjyx_95210624451_pic01" style={{ width: '100%' }}>
                            <img className="lazy-img lazy-seq-success" width="100%" data-width data-height src="//image2.suning.cn/uimg/cms/img/156151531747425642.png" />
                        </div>
                    </div>
                </div>

            </div>

        )
    }


}





export default withRouter(connect()(Fundguji));