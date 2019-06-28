import React from 'react';
import './Login.css'
import { connect } from 'react-redux'
import Keyboard1 from '../../components/Keyboard1/Keyboard1';
import Keyboard2 from '../../components/Keyboard2/Keyboard2';

import { withRouter, Link } from 'dva/router';

var time = 59;
var ranNum = "";
class Login extends React.Component {
    state = {
        // isok: {},
        p_mes: "",//手机验证码
        time_isok: true,
        m_login_isok: false,  //短信登录开关
        m_bottom: 'block',
        z_bottom: 'none',
        z_login_isok: true,   //账号登录开关
        key_isok: 'none',
        focus_isok: ["1", "1", "1", "1"],
        focus_isok1: false,
        focus_isok2: false,
        focus_isok3: false,
        focus_isok4: false,
        ranNum: ''


    }

    //短信
    m_login() {
        if (this.state.m_login_isok) {
            this.props.dispatch({
                type: 'login_store/passworld',
                phone_num: "",
                passworld_num: ""
            })
            this.setState({
                m_login_isok: false,
                z_login_isok: true,
                m_bottom: 'block',
                z_bottom: 'none',
                key_isok: 'none',
                focus_isok1: false,
                focus_isok2: false,
                focus_isok3: false,
                focus_isok4: false,
            })

        }
    }
    //账号
    z_login() {
        if (this.state.z_login_isok) {
            this.props.dispatch({
                type: 'login_store/passworld',
                phone_num: "",
                passworld_num: ""
            })
            this.setState({
                z_login_isok: false,
                m_login_isok: true,
                m_bottom: 'none',
                z_bottom: 'block',
                key_isok: 'none',
                focus_isok1: false,
                focus_isok2: false,
                focus_isok3: false,
                focus_isok4: false,

            })
        }

    }


    //显示隐藏输入键
    show_key1() {

        this.setState({
            focus_isok1: true,
            focus_isok2: false,
            focus_isok3: false,
            focus_isok4: false,
            key_isok: 'block'
        })

    }
    show_key2() {

        this.setState({
            focus_isok1: false,
            focus_isok2: true,
            focus_isok3: false,
            focus_isok4: false,
            key_isok: 'block'

        })
        // console.log(this.props.login_store.phone_num, this.props.login_store.passworld_num)
    }
    show_key3() {

        this.setState({
            focus_isok1: false,
            focus_isok2: false,
            focus_isok3: true,
            focus_isok4: false,
            key_isok: 'block'

        })
    }
    show_key4() {

        this.setState({
            focus_isok1: false,
            focus_isok2: false,
            focus_isok3: false,
            focus_isok4: true,
            key_isok: 'block'

        })
    }
    //账号登录
    login_isok1() {
        if (this.props.login_store.phone_num !== "" && this.props.login_store.passworld_num !== "") {
            if (this.props.login_store.phone_num === sessionStorage.getItem("userPhone") && this.props.login_store.passworld_num === sessionStorage.getItem("userPassword")) {
                this.props.history.push("/");
                // this.props.history.go(-1)

            }
        }
    }
    //短信登录
    login_isok2() {

        if (this.props.login_store.phone_num !== "" && this.props.login_store.passworld_num !== "") {
            if (this.props.login_store.passworld_num === ranNum) {
                this.props.history.push("/");

                // this.props.history.go(-1)

                sessionStorage.setItem('userPhone', this.props.login_store.phone_num)
            }

        }
    }
    phone_mes() {
        if (this.props.login_store.phone_num.length === 11) {
            if (this.state.time_isok) {


                for (var i = 0; i < 4; i++) {
                    ranNum += parseInt(Math.random() * 10)
                }
                console.log(ranNum)
                this.setState({
                    time_num: 60
                })

                let timer = setInterval(() => {

                    this.setState({
                        time_num: time--
                    })
                    if (time <= 0) {
                        clearInterval(timer)
                        this.setState({
                            time_num: '获取验证码'
                        })
                    }
                }, 1000)
                this.setState({
                    time_isok: false
                })
            }
        }
    }
    clear() {
        this.props.dispatch({
            type: 'login_store/passworld',
            phone_num: "",
            passworld_num: this.props.passworld_num
        })
    }
    //渲染
    render() {
        return (
            <div style={{ height: '100%' }}>
                <section className="wrapper" >
                    <div className="index">
                        <div>
                            <div className="login-title">
                                <div className="short-msg-title" onClick={this.m_login.bind(this)}><span className={!this.state.m_login_isok ? 'login-single-title active' : 'login-single-title'}>短信登录</span>
                                    <div className="border-bottom-left" style={{ display: this.state.m_bottom }} />
                                </div>
                                <div className="account-passport-title" onClick={this.z_login.bind(this)}><span className={!this.state.z_login_isok ? 'login-single-title active' : 'login-single-title'}>账号密码登录</span>
                                    <div className="border-bottom-right" style={{ display: this.state.z_bottom }} />
                                </div>
                            </div>
                            <div className="tab-msg" style={{ display: this.state.m_bottom }}>
                                <div className="form">
                                    <div className="input">
                                        <div className="li-left">手机号</div>
                                        <div className="touch-input" data-index='0' onClick={this.show_key1.bind(this)} />
                                        <div className={this.state.focus_isok1 ? 'li-center-content input' : 'li-center-content'} >
                                            <div className={this.props.login_store.phone_num.length > 0 && this.state.focus_isok1 ? 'li-center' : 'li-center empty'} >{this.props.login_store.phone_num.length > 0 ? this.props.login_store.phone_num : '输入手机号'}</div> <em className={!this.props.login_store.phone_num.length > 0 || !this.state.focus_isok1 ? 'cursor-left-frame' : 'cursor-frame'} />
                                        </div>
                                        <div className='clear grey' />
                                    </div>
                                    <div className="input-border" />
                                    <div id="msg-capture" className="msg-capture" style={{ display: 'none' }} />

                                    <div className="input msg">
                                        <div className="li-left">验证码</div>
                                        <div className="touch-input" data-index='1' onClick={this.show_key2.bind(this)} />
                                        <div className={this.state.focus_isok2 ? 'li-center-content input' : 'li-center-content'}>
                                            <div className={this.props.login_store.passworld_num.length > 0 && this.state.focus_isok2 ? 'li-center' : 'li-center empty'}>{this.props.login_store.passworld_num.length > 0 ? this.props.login_store.passworld_num : '输入短信验证码'}</div> <em className={!this.props.login_store.passworld_num.length > 0 || !this.state.focus_isok2 ? 'cursor-left-frame' : 'cursor-frame'} />
                                        </div>
                                        <div className={this.props.login_store.phone_num.length === 11 ? "li-right" : "li-right grey"} onClick={this.phone_mes.bind(this)}>{!this.state.time_isok ? this.state.time_num : '获取验证码'}</div>
                                    </div>
                                    <div className="input-border" />
                                </div>
                                {/**/}

                                <div className="login-content">
                                    <div onClick={this.login_isok2.bind(this)} name="passport_account_msg_login" className="login-btn" style={this.props.login_store.phone_num.length > 0 && this.props.login_store.passworld_num.length > 0 ? { backgroundColor: '#247cf0' } : {}}>登录</div>
                                </div>
                                <div className="more-action">
                                    <Link to="register"><span>注册</span></Link>
                                    &nbsp;&nbsp;|&nbsp;&nbsp;
                                    <span name="passport_account_msg_help">帮助</span></div>
                            </div>
                            <div className="tab-account" style={{ display: this.state.z_bottom }}>
                                <div className="form">
                                    <div className="input">
                                        <div className="li-left">账号</div>
                                        <div className="touch-input" onClick={this.show_key3.bind(this)} />
                                        <div className={this.state.focus_isok3 ? 'li-center-content input' : 'li-center-content'}>
                                            <div className={this.props.login_store.phone_num.length > 0 && this.state.focus_isok3 ? 'li-center' : 'li-center empty'}>{this.props.login_store.phone_num.length > 0 ? this.props.login_store.phone_num : '邮箱/手机号'}</div> <em className={!this.props.login_store.phone_num.length > 0 || !this.state.focus_isok3 ? 'cursor-left-frame' : 'cursor-frame'} />
                                        </div>
                                        <div className='clear grey' />
                                    </div>
                                    <div className="input-border" />
                                    <div className="input pwd">
                                        <div className="li-left">密码</div>
                                        <div className="touch-input" onClick={this.show_key4.bind(this)} />
                                        <div className={this.state.focus_isok4 ? 'li-center-content input' : 'li-center-content'}>
                                            {/* <div className="li-center empty">登录密码</div> <em className="cursor-left-frame" /> */}
                                            <div className={this.props.login_store.passworld_num.length > 0 && this.state.focus_isok4 ? 'li-center' : 'li-center empty'}>{this.props.login_store.passworld_num.length > 0 ? this.props.login_store.passworld_num : '登录密码'}</div> <em className={!this.props.login_store.passworld_num.length > 0 || !this.state.focus_isok4 ? 'cursor-left-frame' : 'cursor-frame'} />

                                        </div>
                                        <div className="password-eye" />
                                    </div>
                                    <div className="input-border" />

                                </div>
                                <div className="forgrt-psd-parent">
                                    <p name="passport_account_password_forget" className="forgrt-psd">忘记密码</p>
                                </div>

                                <div id="account-captcha" className="captcha" style={{ display: 'none' }} />
                                <div className="login-content">
                                    <div className="login-btn" style={this.props.login_store.phone_num.length > 0 && this.props.login_store.passworld_num.length > 0 ? { backgroundColor: '#247cf0' } : {}} onClick={this.login_isok1.bind(this)}>登录</div>
                                </div>

                                <div className="more-action"> <Link to="register"><span>注册</span></Link>
                                    &nbsp;&nbsp;|&nbsp;&nbsp;
                                 <span name="passport_account_password_help">帮助</span></div>
                            </div>
                        </div>
                    </div>
                </section>
                <div tabIndex={-1} style={{ display: this.state.key_isok }} className="m-keyboard fixed" >
                    {this.props.login_store.ABC_isok ?
                        <Keyboard1 type={this.state.focus_isok1 ? 'focus_isok1' : '' || this.state.focus_isok2 ? 'focus_isok2' : '' || this.state.focus_isok3 ? 'focus_isok3' : '' || this.state.focus_isok4 ? 'focus_isok4' : ''} />
                        : <Keyboard2 type={this.state.focus_isok1 ? 'focus_isok1' : '' || this.state.focus_isok2 ? 'focus_isok2' : '' || this.state.focus_isok3 ? 'focus_isok3' : '' || this.state.focus_isok4 ? 'focus_isok4' : ''} />}
                </div>
            </div>

        )

    }
    componentDidMount() {
    }
}

export default withRouter(connect((state) => {
    return state
})(Login))