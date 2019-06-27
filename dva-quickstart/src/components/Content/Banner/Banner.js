import React from 'react';
import { connect } from 'dva';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

// import styles from '../../routes/Insureance/Insurance';
const style1 = {
    width: '100%'
}
class InsIndexBanner extends React.Component {
    render() {
        return (
            <div className="swiper-container" style={{ ...style1 }}>
                <div className="swiper-wrapper">
                    {
                        this.state[this.props.dataName].map((item, index) => {
                            return (
                                <div className="swiper-slide" key={index}>
                                    <img src={item.imgurl} alt="" style={{ width: "100%" }} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="swiper-pagination" />
            </div>



        )
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
    state = {

        personality: [
            {
                imgurl: "https://image.suning.cn/uimg/sfp/ad/156094482089455766.png"
            },
            {
                imgurl: "https://image.suning.cn/uimg/sfp/ad/156094492730462785.png"
            },
            {
                imgurl: "https://image.suning.cn/uimg/sfp/ad/156094512348237859.png"
            },
            {
                imgurl: "https://image.suning.cn/uimg/sfp/ad/156094523190954374.png"
            },
            {
                imgurl: "https://image.suning.cn/uimg/sfp/ad/156094546689149974.png"
            },
            {
                imgurl: "https://image.suning.cn/uimg/sfp/ad/156094562640603719.png"
            },
            {
                imgurl: "https://image.suning.cn/uimg/sfp/ad/156094482089455766.png"
            },
            {
                imgurl: "https://image.suning.cn/uimg/sfp/ad/156094492730462785.png"
            }

        ]
        
        ,wealth:[
            {
                imgurl: "https://image.suning.cn/uimg/sfp/ad/156094675357435541.png"
            },
            {
                imgurl: "https://image.suning.cn/uimg/sfp/ad/156094687340173817.png"
            },
            {
                imgurl: "https://image.suning.cn/uimg/sfp/ad/156094695377357866.png"
            },
            {
                imgurl: "https://image.suning.cn/uimg/sfp/ad/156094716263268721.png"
            }
        ]
    }
}

// IndexPage.propTypes = {
// };

export default connect()(InsIndexBanner);
