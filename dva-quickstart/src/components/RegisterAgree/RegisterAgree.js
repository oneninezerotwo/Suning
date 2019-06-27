import React from 'react'
import { connect } from 'react-redux'

import {Link } from 'dva/router';

class Register_agree extends React.Component {
    state={
        show_agree:this.props.show
    }
      
     //关闭同意
     agreeOK(){
         this.setState({
             show_agree:'none'
         })
         this.props.dispatch({
            type: 'login_store/agree',
            agree_isok:false
        })
     }
    render() {
        return (
            <div className="wrapper ani" style={this.state.show_agree==='block'?{backgroundColor: 'rgb(127, 127, 127)'}:{backgroundColor: 'rgb(255, 255, 255)'}}>
            <div className="framePosition" id="ani-frame" style={{ display: this.state.show_agree }}>
                <div style={{ paddingTop: 10 }}>
                    <Link to='/login'>
                        <div className="frameClose" id="closeFrame" />
                    </Link>
                    
                </div>
                <div className="frameContent">
                    <div className="frameTitle"><strong>注册协议</strong></div>
                    <div className="frameP">
                        <p>对于出租、出借、出售、购买支付账户，假冒他人身份或虚构代理关系开立支付账户的用户，<strong>易付宝将在5年内暂停其支付账户所有业务并不再为其开立新户。您充分了解并清楚知晓出租、出借、出售、购买易付宝账户的相关法律责任和惩戒措施，承诺依法合规开立和使用本人易付宝账户。</strong></p>
                        <p> 您在申请注册流程中点击同意前，<strong>请您务必审慎阅读、充分理解协议中相关条款内容，尤其是以粗体显示的部分。如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。</strong></p>
                        <div><a >《易付宝服务协议》</a></div>
                        <div><a>《易付宝隐私政策》</a></div>
                        <div><a >《苏宁易购会员章程》</a></div>
                    </div>
                </div>
                <div className="frameButton" id="frameButton-ani">
                    <p className="frameButton-text" onClick={this.agreeOK.bind(this)}>同意并继续</p>
                </div>
            </div>
            </div>
       
            

        )
        }

    }

export default connect()(Register_agree)