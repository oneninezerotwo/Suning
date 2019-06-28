import React from 'react';

import { connect } from 'dva';


class Fpop extends React.Component {

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

                <div className="pop-window" style={{ display: this.state.tool == true ? 'block' : 'none' }}>
                    <div className="pop-wrap"><a className="pop-info anchor-hook"><img alt src="https://image2.suning.cn/uimg/cms/img/155926531180577043.png" /></a>
                        <div className="pop-close" onClick={this.takeoff.bind(this)} />
                    </div>
                </div>

            </div>
        )
    }


}





export default connect()(Fpop);