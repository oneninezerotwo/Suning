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
            <div className="swiper-container m" style={{ marginTop: '89px', ...style1 }} >
                <div className="swiper-wrapper m">

                    {
                        this.state.img.map((item, index) => {

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
        img: [
            {
                imgurl: "https://image.suning.cn/uimg/eppagtms/eppagtms/153700518276146504.jpg"
            },
            {
                imgurl: "https://image.suning.cn/uimg/eppagtms/eppagtms/156033318775434458.jpg"
            },
            {
                imgurl: "https://image.suning.cn/uimg/eppagtms/eppagtms/155745463728700167.jpg"
            }
        ]

    }
}

// IndexPage.propTypes = {
// };

export default connect()(InsIndexBanner);
