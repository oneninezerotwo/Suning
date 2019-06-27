import React from 'react';
import './register.css';
import RegisterAgree from '../../components/RegisterAgree/RegisterAgree';
import RegisterMessages from '../../components/RegisterMessages/RegisterMessages';

import { connect } from 'react-redux'


class Register extends React.Component {
    state={
        show_agree:"block"
    }

    render() {
        return (
            <div style={{height:'100%'}}>
               <div className="header"><header><div className="icon icon-back" /><div className="title">注册苏宁金融</div></header></div>
               <div className="wrapper ani" style={this.props.login_store.agree_isok?{backgroundColor: 'rgb(127, 127, 127)'}:{backgroundColor: 'rgb(255, 255, 255)'}}>  
              {this.props.login_store.agree_isok?<RegisterAgree show={this.state.show_agree}/>:<RegisterMessages/>}
              </div> 
            </div>

        )

    }
}

export default connect((state)=>{
    return state
})(Register)