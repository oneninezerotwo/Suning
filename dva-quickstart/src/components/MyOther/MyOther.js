import React from 'react'


import { connect } from 'react-redux'
import img1 from '../../assets/images/iconbx.png'
import img2 from '../../assets/images/iconsnk.png'

class MyOther extends React.Component {

    render() {
        return (
            <div className="swiper-slide swiper-slide-active" style={{ width: 375 }}>
                <div id="others">
                    <a name="jr_none_myAssets_myInsurance">
                        <div className="secure floor">
                            <div className="left-ico">
                                <img src={img1} alt="保险icon" className="floor-icon" />
                                <span>保险</span>
                            </div>
                            <div className="right"><span>0张保单</span></div>
                        </div>
                    </a>
                    <a name="jr_none_myAssets_mysncard" >
                        <div className="snCard floor">
                            <div className="left-ico">
                                <img src={img2} alt="保险icon" className="floor-icon" />
                                <span>苏宁卡</span>
                            </div>
                            <div className="right">
                                <span>
                                    苏宁卡 用心表达
          </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>


        )

    }
}

export default connect()(MyOther)