import React from 'react';

import { connect } from 'dva';


class Ficon extends React.Component {

    state = {
        tool: true
    }
    takeoff() {
        this.setState({
            tool: this.state.tool = !this.state.tool
        })
        console.log(this.state.tool)
    }

    render() {

        return (
            <div>

                <div id="floatIcon" className="float-icon anchor-hook" style={{ visibility: 'visible', display: this.state.tool == true ? 'block' : 'none' }}>
                    <i className="close-icon" onClick={this.takeoff.bind(this)} />
                    <img src="https://image2.suning.cn/uimg/cms/img/156110257104801484.png" />
                </div>


            </div>
        )
    }


}





export default connect()(Ficon);