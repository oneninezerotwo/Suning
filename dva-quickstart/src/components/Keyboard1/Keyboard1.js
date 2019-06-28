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
        num: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        se: 0
    }
    down(e) {
        // e.stopPropagation();
        console.log('0000');
    }
    h_light(e) {
        // e.nativeEvent.stopImmediatePropagation();
        // e.target.onmousedown = function () {
        //     console.log("dowm")
        // }
        // e.target.onmouseup = function () {
        //     console.log("up")
        // }
        // this.refs.key0.addEventListener('mousedown', function (e) {
        //     e.stopPropagation()
        //     console.log(1111)
        // })
        switch (this.props.type) {
            case "focus_isok1":
                if (this.props.login_store.phone_num.length < 11) {
                    this.props.dispatch({
                        type: 'login_store/key',
                        phone_num: this.props.login_store.phone_num + e.target.getAttribute("val"),
                        passworld_num: this.props.login_store.passworld_num
                    })
                }
                break;
            case "focus_isok2":
                if (this.props.login_store.passworld_num.length < 4) {
                    this.props.dispatch({
                        type: 'login_store/passworld',
                        passworld_num: this.props.login_store.passworld_num + e.target.getAttribute("val"),
                        phone_num: this.props.login_store.phone_num
                    })
                }
                break;
            case "focus_isok3":
                if (this.props.login_store.phone_num.length < 11) {
                    this.props.dispatch({
                        type: 'login_store/key',
                        phone_num: this.props.login_store.phone_num + e.target.getAttribute("val"),
                        passworld_num: this.props.login_store.passworld_num

                    })
                }
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
    delete_num(e) {

        switch (this.props.type) {
            case "focus_isok1":
                this.props.dispatch({
                    type: 'login_store/num_delete',
                    phone_num: this.props.login_store.phone_num.substr(0, this.props.login_store.phone_num.length - 1),
                    passworld_num: this.props.login_store.passworld_num
                })
                console.log(this.props.login_store.phone_num)
                break;
            case "focus_isok2":

                this.props.dispatch({
                    type: 'login_store/num_delete',
                    phone_num: this.props.login_store.phone_num,
                    passworld_num: this.props.login_store.passworld_num.substr(0, this.props.login_store.passworld_num.length - 1)
                })

                break;
            case "focus_isok3":
                this.props.dispatch({
                    type: 'login_store/num_delete',
                    phone_num: this.props.login_store.phone_num.substr(0, this.props.login_store.phone_num.length - 1),
                    passworld_num: this.props.login_store.passworld_num
                })
                break;
            case "focus_isok4":
                this.props.dispatch({
                    type: 'login_store/num_delete',
                    phone_num: this.props.login_store.phone_num,
                    passworld_num: this.props.login_store.passworld_num.substr(0, this.props.login_store.passworld_num.length - 1)
                })
                break;
            default:
                break;
        }
    }

    render() {
        return (

            <div className="m-simple">
                <div className="m-nums clearfix" id="click_key">
                    {this.state.num.map((item, index) => {
                        return <div className="m-key" key={index}>
                            <div val={item} className="val" onClick={this.h_light.bind(this)}>{item}</div>
                        </div>
                    })}
                    <div className="m-key" onClick={this.ABC_tagger.bind(this)}>
                        <div val="ABC" className="val chars">ABC</div>
                    </div>
                    <div className="m-key">
                        <div val={0} className="val" ref="key0" onClick={this.h_light.bind(this)}>0</div>
                    </div>
                    <div className="m-key">
                        <div val="#+=" className="val symbol">#+=</div>
                    </div>
                </div>
                <div className="m-oper">
                    <div val="delete" className="m-oper-con m-delete" onClick={this.delete_num.bind(this)} />
                    <div className="m-oper-con m-complete">完成</div>
                </div>
            </div>

        )

    }

}

export default connect((state) => {
    return state
})(Keyboard1)