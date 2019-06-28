import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'dva/router';

class RegisterMessages extends React.Component {
    state = {
        phone: [],
        password: [],
        look: false
    }
    //输入手机号
    phone_num(e) {
        this.setState({
            phone: e.target.value
        })
    }
    //输入密码
    password_num(e) {
        this.setState({
            password: e.target.value
        })
    }
    //清空手机号
    empty() {
        this.setState({
            phone: ''
        })
    }
    //看密码
    look_password() {
        this.setState({
            look: !this.state.look
        })
    }
    //注册
    register_ok() {
        // console.log(this.state.phone, this.state.password)
        sessionStorage.setItem('userPhone', this.state.phone)
        sessionStorage.setItem('userPassword', this.state.password)

    }
    render() {
        return (
            <div id="notShowFrame">
                <div className="logoPosition">
                    <div className="logo">
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-unit">
                        <div className="input-account input-row">
                            <span className="input-tip" style={{ color: "black" }}>账号</span>
                            <input autoComplete="off" id="regAccount" type="text" placeholder={this.state.phone.length > 0 ? '' : '手机号码'} value={this.state.phone} onChange={this.phone_num.bind(this)} />
                            <i className="icon login-input-clear icon-clear" onClick={this.empty.bind(this)} style={this.state.phone.length > 0 ? { display: 'block' } : { display: 'none' }} />
                        </div>
                        <div className="input-pwd input-row">
                            <span className="input-tip" style={{ color: "black" }}>密码</span>
                            <input autoComplete="off" id="regpwd" type={this.state.look ? 'text' : 'password'} onChange={this.password_num.bind(this)} value={this.state.password} placeholder={this.state.password.length > 0 ? "" : "数字＋字母、符号的组合8-20位"} maxLength={20} />
                            <div name="epph5_yg_zhuce_mima" onClick={this.look_password.bind(this)} className={this.state.look ? 'icon login-eye icon-eye-open' : 'icon login-eye icon-eye-close'} />
                        </div>
                        <div className="bottom-row aggree-protcol" style={{ display: 'none' }}>
                            <em className="aggree-chk not" />
                            我同意<a id="protocolQuick">《服务协议》</a></div>
                        <div id="sillerDiv" style={{ marginTop: '0.2rem' }}>
                            <div id="J_StaticForm" style={{ margin: '0px auto', display: 'block' }}>
                                <input autoComplete="off" name="sillerToken" id="slideInput" v-model="slideInput" type="hidden" />
                            </div>
                        </div>

                        <div name="epph5_yg_zhuce_enroll2" className="btnQuick next-step-btn" style={{ backgroundColor: '#1F86ED' }}>
                            <div id="loader-reg" className="loader-inner ball-clip-rotate">
                                <div></div>
                            </div>
                            <Link to="login">
                                <div className="btn-txt" style={{ color: 'white' }} onClick={this.register_ok.bind(this)}>注册</div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>


        )
    }

}

export default connect()(RegisterMessages)