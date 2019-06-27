import React from 'react'
import './home.css'
import Header from "../../components/Header/Header"
import Content from "../../components/Content/Content"

import { connect } from 'react-redux'


// let num = 1
class Home extends React.Component {
  
  render() {
    return (<div className="inm-gather inm-gather-out" style={{ background: 'linear-gradient(-180deg, rgb(36, 124, 240) 0px, rgb(255, 255, 255) 350px)' }}>

      <Header/>
      <Content/>
    </div>


    )

  }
}

export default connect()(Home)