import React from 'react';
import './register.css';
import RegisterAgree from '../../components/RegisterAgree/RegisterAgree';
import RegisterMessages from '../../components/RegisterMessages/RegisterMessages';
import { withRouter } from 'dva/router';

import { connect } from 'react-redux'


class Register extends React.Component {
    state = {
        show_agree: "block"
    }
    go_back() {
        console.log(22)
        this.props.history.go(-1)
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <div className="header"><header><div className="icon icon-back" style={{ zIndex: 11111 }} onClick={this.go_back.bind(this)} /><div className="title">注册苏宁金融</div></header></div>
                <div className="wrapper ani" style={this.props.login_store.agree_isok ? { backgroundColor: 'rgb(127, 127, 127)' } : { backgroundColor: 'rgb(255, 255, 255)' }}>
                    {this.props.login_store.agree_isok ? <RegisterAgree show={this.state.show_agree} /> : <RegisterMessages />}
                </div>

            </div>

        )

    }
}

export default withRouter(connect((state) => {
    return state
})(Register))