import React from 'react';

import { connect } from 'react-redux'
// import store from "../../store/store";

// let num = 1
class Header extends React.Component {
    state = {
       isok1:true,
       isok2:true    
      }
    tagger1(){
      if(this.state.isok1){
      this.props.dispatch({
        type: 'home_store/save',
        g_block:!this.props.home_store.g_block,  
       })
    this.setState({
      isok1:false,
      isok2:true,
    })
     }
    }
    tagger2(){
      if(this.state.isok2){
      this.props.dispatch({
        type: 'home_store/save',
        g_block:!this.props.home_store.g_block,  
       })
    this.setState({
      isok1:true,
      isok2:false
    })
     }
    }


    //渲染
    render() {
        return (    <div className="inm-gather-header">
  <div className="title">
    <div className="back" />
    <p>苏宁金融</p>
    <div className="menu" data-href="/myAssets.htm">我的资产</div>
  </div>
  <div className="tab">
    <div className={this.props.home_store.g_block? 'block select':'block' } onClick={this.tagger1.bind(this)}><span>个性推荐<em style={{backgroundImage: 'none'}} /></span><b /></div>
    <div className={!this.props.home_store.g_block? 'block select':'block' } onClick={this.tagger2.bind(this)}><span>财富秘籍<em style={{backgroundImage: 'none'}} /></span><b /></div>
  </div>
  <div className="tips inm-hide">
    <span>下拉有惊喜</span>
  </div>
</div>

)

    }
   componentDidMount(){
     console.log(this)
   }
}

export default connect((state)=>{
  return state
})(Header)