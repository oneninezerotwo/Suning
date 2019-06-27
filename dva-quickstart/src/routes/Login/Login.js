import React from 'react';

import './Login.css';
import { connect } from 'react-redux'
import Keyboard1 from '../../components/Keyboard1/Keyboard1';
import Keyboard2 from '../../components/Keyboard2/Keyboard2';
// import { deepStrictEqual } from 'assert';


class Login extends React.Component {

  state = {
    // isok: {},
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


  }
  //短信登录
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
        key_isok: 'none'
      })

    }
  }
  //账号登录
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
        key_isok: 'none'

      })
    }
    console.log(this.props.login_store.phone_num, this.props.login_store.passworld_num)

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
    // console.log(this.props.login_store.phone_num,this.props.login_store.passworld_num)

    // var obj = this.state.focus_isok
    // this.setState({
    //     key_isok: 'block',
    //     focus_isok: obj.map((item, i) => {

    //         if (i === index) {
    //             obj[i] = "2"

    //         } else {
    //             obj[i] = "1"
    //         }
    //         return [...obj]
    //     })
    // })
    // console.log(this.state.focus_isok)
  }
  show_key2() {

    this.setState({
      focus_isok1: false,
      focus_isok2: true,
      focus_isok3: false,
      focus_isok4: false,
      key_isok: 'block'

    })
    console.log(this.props.login_store.phone_num, this.props.login_store.passworld_num)
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
  //渲染
  render() {
    return (
      <div>
        <section className="wrapper">
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
                    <div className="clear grey" />
                  </div>
                  <div className="input-border" />
                  <div id="msg-capture" className="msg-capture" style={{ display: 'none' }} />
                  <div className="slider-box" style={{ display: 'none' }}>
                    <div id="msgSillerDiv">
                      <div id="msg_J_StaticForm" className=" dt_parent float" style={{ width: '100%', height: 38 }}>
                        <div className="dt_child_content" id="msg_J_StaticForm_dt_child_content_containor" style={{ width: '100%', height: 38, backgroundImage: 'url("https://respay.suning.com/epps-pps/paysso/wap_new/style/images/3.png")' }}>
                          <div className="dt_slide_bar" style={{ height: 38, backgroundImage: 'url("https://respay.suning.com/epps-pps/paysso/wap_new/style/images/3.png")' }}>
                          </div>
                          <div className="dt_notice" id="dt_notice" style={{ width: '100%', height: 38, lineHeight: 38 }}>请按住滑块拖到最右边</div>
                          <div className="dt_child_content_knob" style={{ width: 37, height: 37, backgroundImage: 'url("https://respay.suning.com/epps-pps/paysso/wap_new/style/images/3.png")' }}>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input msg">
                    <div className="li-left">验证码</div>
                    <div className="touch-input" data-index='1' onClick={this.show_key2.bind(this)} />
                    <div className={this.state.focus_isok2 ? 'li-center-content input' : 'li-center-content'}>
                      <div className={this.props.login_store.passworld_num.length > 0 && this.state.focus_isok2 ? 'li-center' : 'li-center empty'}>{this.props.login_store.passworld_num.length > 0 ? this.props.login_store.passworld_num : '输入短信验证码'}</div> <em className={!this.props.login_store.passworld_num.length > 0 || !this.state.focus_isok2 ? 'cursor-left-frame' : 'cursor-frame'} />
                    </div>
                    <div className="li-right grey">获取验证码</div>
                  </div>
                  <div className="input-border" />
                </div>
                {/**/}

                <div className="login-content">
                  <div name="passport_account_msg_login" className="login-btn">登录</div>
                </div>
                <div className="more-action">
                  <span name="passport_account_msg_register">注册</span>
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
                    <div className="clear grey" />
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
                  <div className="input img" style={{ display: 'none' }}>
                    <div className="li-left">验证码</div>
                    <div className="touch-input" />
                    <div className="li-center-content">
                      <div className="li-center empty">请输入验证码</div> <em className="cursor-left-frame" />
                    </div>
                    <div className="code-img"><img alt="" id="vcodeimg1" className="get-code-img" /></div>
                  </div>
                  <div className="input-border" style={{ display: 'none' }} />
                </div>
                <div className="forgrt-psd-parent">
                  <p name="passport_account_password_forget" className="forgrt-psd">忘记密码</p>
                </div>
                <div className="login-agreement" style={{ display: 'none' }}><i className="icon chk " /> <span className="agreement-title">同意<span className="agreement-name">《易付宝快速付款协议》</span></span></div>
                <div id="account-captcha" className="captcha" style={{ display: 'none' }} />
                <div className="login-content">
                  <div className="login-btn">登录</div>
                </div>
                <div className="slider-box" style={{ display: 'none' }}>
                  <div id="sillerDiv">
                    <div id="J_StaticForm" className=" dt_parent float" style={{ display: 'block', width: '100%', height: 44 }}>
                      <div className="dt_child_content" id="J_StaticForm_dt_child_content_containor" style={{ width: '100%', height: 44, backgroundImage: 'url("https://respay.suning.com/epps-pps/paysso/wap_new/style/images/2.png")' }}>
                        <div className="dt_slide_bar" style={{ height: 44, backgroundImage: 'url("https://respay.suning.com/epps-pps/paysso/wap_new/style/images/2.png")' }}>
                        </div>
                        <div className="dt_notice" id="dt_notice" style={{ width: '100%', height: 44, lineHeight: 44 }}>滑动登录</div>
                        <div className="dt_child_content_knob" style={{ backgroundImage: 'url("https://respay.suning.com/epps-pps/paysso/wap_new/style/images/2.png")' }}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="more-action"><span name="passport_account_password_register">注册</span>
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

}

export default connect((state) => {
  return state


})(Login)