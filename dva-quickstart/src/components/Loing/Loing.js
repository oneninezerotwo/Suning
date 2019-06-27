import React from 'react'

import { connect } from 'react-redux'
import "./loing.css";
class Loing extends React.Component {

    render() {
        return (
            <div className={this.props.home_store.loing_isok ? "inm-loading-fullshow" : "inm-loading-full"
            }>
                <div className="inm-loading-block">
                    <div className="inm-loading-round">
                        <div className="inm-loading-rotate"><svg width={35} height={35} xmlns="http://www.w3.org/2000/svg">
                            <circle className="inm-loading-ball" r={16} cy="17.5" cx="17.5" strokeLinecap="round" strokeWidth={1} stroke="#fff" fill="none" />
                        </svg></div>
                    </div>
                    <div className="inm-loading-text" />
                </div>
            </div >

        )

    }
}

export default connect((state) => {
    return state
})(Loing)