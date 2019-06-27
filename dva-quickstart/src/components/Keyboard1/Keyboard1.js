import React from 'react';

import { connect } from 'react-redux'

class Keyboard1 extends React.Component {
    //渲染
    ABC_tagger() {
        this.props.dispatch({
            type: 'login_store/save',
            ABC_isok: false
        })
    }
    state = {
        num: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
    h_light(e) {
        // e.nativeEvent.stopImmediatePropagation();
        switch (this.props.type) {
            case "focus_isok1":
                this.props.dispatch({
                    type: 'login_store/key',
                    phone_num: this.props.login_store.phone_num + e.target.getAttribute("val"),
                    passworld_num: this.props.login_store.passworld_num
                })
                break;
            case "focus_isok2":
                this.props.dispatch({
                    type: 'login_store/passworld',
                    passworld_num: this.props.login_store.passworld_num + e.target.getAttribute("val"),
                    phone_num: this.props.login_store.phone_num
                })
                break;
            case "focus_isok3":
                this.props.dispatch({
                    type: 'login_store/key',
                    phone_num: this.props.login_store.phone_num + e.target.getAttribute("val"),
                    passworld_num: this.props.login_store.passworld_num

                })
                break;
            case "focus_isok4":
                this.props.dispatch({
                    type: 'login_store/passworld',
                    passworld_num: this.props.login_store.passworld_num + e.target.getAttribute("val"),
                    phone_num: this.props.login_store.phone_num
                })
                break;
            default:
                break;
        }
    }
    render() {
        return (

            <div className="m-simple">
                <div className="m-nums clearfix">
                    {this.state.num.map((item, index) => {
                        return <div className="m-key" key={index}>
                            <div val={item} className="val" onClick={this.h_light.bind(this)}>{item}</div>
                        </div>
                    })}
                    <div className="m-key" onClick={this.ABC_tagger.bind(this)}>
                        <div val="ABC" className="val chars">ABC</div>
                    </div>
                    <div className="m-key">
                        <div val={0} className="val" onClick={this.h_light.bind(this)}>0</div>
                    </div>
                    <div className="m-key">
                        <div val="#+=" className="val symbol">#+=</div>
                    </div>
                </div>
                <div className="m-oper">
                    <div val="delete" className="m-oper-con m-delete" />
                    <div className="m-oper-con m-complete">完成</div>
                </div>
            </div>

        )

    }
    componentDidMount() {
    }
}

export default connect((state) => {
    return state
})(Keyboard1)