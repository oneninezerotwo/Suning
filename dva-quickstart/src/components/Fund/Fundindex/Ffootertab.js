import React from 'react';

import { connect } from 'dva';
import { withRouter } from 'dva/router';




class Ffootertab extends React.Component {
    state = {
        List: ['精选', '自选', '我的'],
        imglist: ['https://lcres.suning.com/resource/app/resourcePages/images/icon-tabs01.png',
            'https://lcres.suning.com/resource/app/resourcePages/images/icon-tabs03.png',
            'https://lcres.suning.com/resource/app/resourcePages/images/icon-tabs04.png'],
        fit: 0
    }
    jump(index) {
        if (index === 2) {
            console.log(2)
            if (sessionStorage.getItem("userPhone")) {
                this.setState({
                    fit: index
                })
            } else {
                this.props.history.push("/login")
            }
        } else if (index === 0) {
            this.setState({
                fit: index
            })
        }

    }
    render() {

        return (

            <div>

                <div className="footer-tabs">
                    {/* <div className="cell on">
                        <img src="https://lcres.suning.com/resource/app/resourcePages/images/icon-tabs01.png" alt />
                        <p className="name">精选</p>
                    </div>
                    <div className="cell">
                        <img src="https://lcres.suning.com/resource/app/resourcePages/images/icon-tabs03.png" alt />
                        <p className="name">自选</p>
                    </div>
                    <div className="cell">
                        <img src="https://lcres.suning.com/resource/app/resourcePages/images/icon-tabs04.png" alt />
                        <p className="name">我的</p>
                    </div> */}
                    {
                        this.state.List.map((item, index) => {
                            return (
                                // <div className="out" style={{ width: '25%' }}>
                                //     <span key={index} data-key={index} onClick={this.jump.bind(this)} className={
                                //         index == this.state.fit ? "on" : ""
                                //     } name="jinrong_waphlw0702fuli_109453824416_word01">{item.name}</span>
                                // </div>
                                <div className="cell" key={index} data-key={index} onClick={this.jump.bind(this, index)} className={
                                    index === this.state.fit ? "cell on" : "cell"
                                }>
                                    <img data-key={index} onClick={this.jump.bind(this)} src={this.state.imglist[index]} alt="" />
                                    <p data-key={index} className="name">{this.state.List[index]}</p>
                                </div>
                            )
                        })
                    }
                </div>


            </div>

        )
    }


}


export default withRouter(connect()(Ffootertab));