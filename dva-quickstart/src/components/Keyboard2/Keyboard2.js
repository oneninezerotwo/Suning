import React from 'react';

import { connect } from 'react-redux'
// import store from "../../store/store";

// let num = 1
class Keyboard2 extends React.Component {
    state = {
        val1: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
        val2: ["s", "d", "f", "g", "h", "j", "k", "l"],
        val3: ["z", "x", "c", "v", "b", "n", "m"],
        light: false
    }
    h_light(e) {
        // e.nativeEvent.stopImmediatePropagation();
        this.props.dispatch({
            type:'login_store/key',
            phone_num:this.props.login_store.phone_num+e.target.getAttribute("val")
        })
    }
    
    num_tangger() {


        this.props.dispatch({
            type: 'login_store/save',
            ABC_isok: true
        })
    }


    //渲染
    render() {
        return (
            <div className="m-complex">
                <div className="m-row clearfix">
                    {
                        this.state.val1.map((item, index) => {
                            return (<div className="m-key" key={index} >
                                <div val={item} className="val" onClick={this.h_light.bind(this)}>{item}</div>
                            </div>)
                        })
                    }
                </div>
                <div className="m-row clearfix">
                    <div className="m-key margin-left">
                        <div val="a" className="val">a</div>
                    </div>
                    {
                        this.state.val2.map((item, index) => {
                            return (<div className="m-key" key={index}>
                                <div val={item} className="val" onClick={this.h_light.bind(this)}>{item}</div>
                            </div>)
                        })
                    }
                </div>
                <div className="m-row clearfix">
                    <div className="m-key low-up">
                        <div val="low-up" className="val" />
                    </div>
                    {
                        this.state.val3.map((item, index) => {
                            return (<div className="m-key" key={index}>
                                <div val={item} className="val" onClick={this.h_light.bind(this)}>{item}</div>
                            </div>)
                        })
                    }
                    <div className="m-key delete">
                        <div val="delete" className="val" onClick={this.h_light.bind(this)}/>
                    </div>

                </div>
                <div className="m-row clearfix">
                    <div className="m-key nums" onClick={this.num_tangger.bind(this)}>
                        <div val={123} className="val">123</div>
                    </div>
                    <div className="m-key symbol">
                        <div val="#+=" className="val">#+=</div>
                    </div>
                    <div className="m-key space">
                        <div val="space" className="val">空格</div>
                    </div>
                    <div className="m-key finish">
                        <div val="finish" className="val">完成</div>
                    </div>
                </div>
            </div>

        )

    }
    componentDidMount() {

    }
}

export default connect((state) => {
    return state
})(Keyboard2)